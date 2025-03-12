using System;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;

namespace DataBaseApp
{
    public partial class CalendarPage : Page
    {
        private ProductDbContext _db = new ProductDbContext();

        public CalendarPage()
        {
            InitializeComponent();
            GenerateTimeSlots();
        }

        private void GenerateTimeSlots()
        {
            TimeSlotPanel.Children.Clear();
            DateTime selectedDate = CalendarDatePicker.SelectedDate ?? DateTime.Now;

            for (int hour = 0; hour < 24; hour++) 
            {
                var task = _db.CalendarTasks
                    .AsEnumerable() // Force client-side evaluation
                    .FirstOrDefault(t =>
                        t.Date.Date == selectedDate.Date &&
                        t.Time.Hours == hour);

                // Create a StackPanel to hold the time slot details
                StackPanel slotContent = new StackPanel
                {
                    Children =
                    {
                        new TextBlock { Text = $"{hour}:00 - {hour + 1}:00", FontSize = 16, FontWeight = FontWeights.Bold },
                        new TextBlock { Text = task != null ? task.TaskName : "No Task", FontWeight = FontWeights.SemiBold },
                        CreateAddTaskButton(hour)
                    }
                };

                // Add Delete and Update buttons only if the task exists
                if (task != null)
                {
                    slotContent.Children.Add(CreateDeleteTaskButton(task.Id));
                    slotContent.Children.Add(CreateUpdateTaskButton(task.Id));
                }

                // Create a Border to wrap the StackPanel
                Border slot = new Border
                {
                    Padding = new Thickness(10),
                    Margin = new Thickness(5),
                    Background = new SolidColorBrush(Colors.LightGray),
                    CornerRadius = new CornerRadius(10),
                    Child = slotContent
                };

                TimeSlotPanel.Children.Add(slot);
            }
        }

        private Button CreateAddTaskButton(int hour)
        {
            Button addButton = new Button
            {
                Content = "Add Task",
                Tag = hour
            };
            addButton.Click += AddTask_Click;
            return addButton;
        }

        private Button CreateDeleteTaskButton(int taskId)
        {
            Button deleteButton = new Button
            {
                Content = "Delete Task",
                Tag = taskId
            };
            deleteButton.Click += DeleteTask_Click;
            return deleteButton;
        }

        private Button CreateUpdateTaskButton(int taskId)
        {
            Button updateButton = new Button
            {
                Content = "Update Task",
                Tag = taskId
            };
            updateButton.Click += UpdateTask_Click;
            return updateButton;
        }

        private void CalendarDatePicker_SelectedDateChanged(object sender, SelectionChangedEventArgs e)
        {
            GenerateTimeSlots();
        }

        private void AddTask_Click(object sender, RoutedEventArgs e)
        {
            int selectedHour = (int)((Button)sender).Tag;
            DateTime selectedDate = CalendarDatePicker.SelectedDate ?? DateTime.Now;

            string taskName = Microsoft.VisualBasic.Interaction.InputBox("Enter Task Name:", "Add Task", "");

            if (!string.IsNullOrWhiteSpace(taskName))
            {
                var calendarTask = new CalendarTask
                {
                    TaskName = taskName,
                    Date = selectedDate,
                    Time = TimeSpan.FromHours(selectedHour)
                };

                _db.CalendarTasks.Add(calendarTask);
                _db.SaveChanges();
                GenerateTimeSlots();
            }
        }

        private void DeleteTask_Click(object sender, RoutedEventArgs e)
        {
            int taskId = (int)((Button)sender).Tag;
            var task = _db.CalendarTasks.Find(taskId);
            if (task != null)
            {
                _db.CalendarTasks.Remove(task);
                _db.SaveChanges();
                GenerateTimeSlots();
            }
        }

        private void UpdateTask_Click(object sender, RoutedEventArgs e)
        {
            int taskId = (int)((Button)sender).Tag;
            var task = _db.CalendarTasks.Find(taskId);
            if (task != null)
            {
                string newTaskName = Microsoft.VisualBasic.Interaction.InputBox("Enter New Task Name:", "Update Task", task.TaskName);

                if (!string.IsNullOrWhiteSpace(newTaskName))
                {
                    task.TaskName = newTaskName;
                    _db.SaveChanges();
                    GenerateTimeSlots();
                }
            }
        }

        private void NavigateToToDo_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                NavigationService.Navigate(new ToDoPage());
            }
            catch (Exception ex)
            {
                MessageBox.Show($"An error occurred while navigating to the To-Do Page: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
        private void Back_Click(object sender, RoutedEventArgs e)
        {
            // Navigate back to the Home Page
            NavigationService.Navigate(new HomePage());
        }
    }
}