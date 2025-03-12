using System.Linq;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;

namespace DataBaseApp
{
    public partial class ToDoPage : Page
    {
        private ProductDbContext _db = new ProductDbContext();

        public ToDoPage()
        {
            InitializeComponent();
            LoadTasks();
        }

        private void LoadTasks()
        {
            ToDoPanel.Children.Clear();
            InProgressPanel.Children.Clear();
            CompletedPanel.Children.Clear();

            var toDoTasks = _db.Tasks.Where(t => t.Status == "To-Do").ToList();
            var inProgressTasks = _db.Tasks.Where(t => t.Status == "In Progress").ToList();
            var completedTasks = _db.Tasks.Where(t => t.Status == "Completed").ToList();

            foreach (var task in toDoTasks)
            {
                ToDoPanel.Children.Add(CreateTaskCard(task));
            }

            foreach (var task in inProgressTasks)
            {
                InProgressPanel.Children.Add(CreateTaskCard(task));
            }

            foreach (var task in completedTasks)
            {
                CompletedPanel.Children.Add(CreateTaskCard(task));
            }
        }

        private Border CreateTaskCard(Task task)
        {
            Button deleteButton = new Button { Content = "Delete", Tag = task.Id, Margin = new Thickness(5) };
            deleteButton.Click += DeleteTask;

            StackPanel buttonPanel = new StackPanel { Orientation = Orientation.Horizontal };

            if (task.Status == "To-Do")
            {
                Button updateButton = new Button { Content = "Update", Tag = task.Id, Margin = new Thickness(5) };
                updateButton.Click += UpdateTask;
                buttonPanel.Children.Add(updateButton);

                Button moveToInProgressButton = new Button { Content = "Move to In Progress", Tag = task.Id, Margin = new Thickness(5) };
                moveToInProgressButton.Click += MoveToInProgress;
                buttonPanel.Children.Add(moveToInProgressButton);
            }
            else if (task.Status == "In Progress")
            {
                Button moveToCompletedButton = new Button { Content = "Move to Completed", Tag = task.Id, Margin = new Thickness(5) };
                moveToCompletedButton.Click += MoveToCompleted;
                buttonPanel.Children.Add(moveToCompletedButton);
            }

            buttonPanel.Children.Add(deleteButton);

            Border card = new Border
            {
                Padding = new Thickness(10),
                Margin = new Thickness(10),
                Background = new SolidColorBrush(Color.FromArgb(0x80, 0xFF, 0xFF, 0xFF)),
                CornerRadius = new CornerRadius(10),
                Child = new StackPanel
                {
                    Children =
                    {
                        new TextBlock { Text = task.Name, FontSize = 16, FontWeight = FontWeights.Bold },
                        new TextBlock { Text = $"Date: {task.Date:yyyy-MM-dd}" },
                        new TextBlock { Text = $"Time: {task.Time}" },
                        buttonPanel
                    }
                }
            };
            return card;
        }

        private void DeleteTask(object sender, RoutedEventArgs e)
        {
            int taskId = (int)((Button)sender).Tag;
            var task = _db.Tasks.Find(taskId);
            if (task != null)
            {
                _db.Tasks.Remove(task);
                _db.SaveChanges();
                LoadTasks();
            }
        }

        private void UpdateTask(object sender, RoutedEventArgs e)
        {
            int taskId = (int)((Button)sender).Tag;
            var task = _db.Tasks.Find(taskId);
            if (task != null)
            {
                TaskWindow taskWindow = new TaskWindow(task);
                if (taskWindow.ShowDialog() == true)
                {
                    _db.SaveChanges();
                    LoadTasks();
                }
            }
        }

        private void MoveToInProgress(object sender, RoutedEventArgs e)
        {
            int taskId = (int)((Button)sender).Tag;
            var task = _db.Tasks.Find(taskId);
            if (task != null)
            {
                task.Status = "In Progress";
                _db.SaveChanges();
                LoadTasks();
            }
        }

        private void MoveToCompleted(object sender, RoutedEventArgs e)
        {
            int taskId = (int)((Button)sender).Tag;
            var task = _db.Tasks.Find(taskId);
            if (task != null)
            {
                task.Status = "Completed";
                _db.SaveChanges();
                LoadTasks();
            }
        }

        private void AddTask_Click(object sender, RoutedEventArgs e)
        {
            TaskWindow taskWindow = new TaskWindow();
            if (taskWindow.ShowDialog() == true)
            {
                LoadTasks();
            }
        }

        private void NavigateToCalendar_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                // Navigate to the Calendar Page
                NavigationService.Navigate(new CalendarPage());
            }
            catch (Exception ex)
            {
                MessageBox.Show($"An error occurred while navigating to the Calendar Page: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
        private void Back_Click(object sender, RoutedEventArgs e)
        {
            // Navigate back to the Home Page
            NavigationService.Navigate(new HomePage());
        }

        private void ShowToDo(object sender, RoutedEventArgs e) => LoadTasks();
        private void ShowInProgress(object sender, RoutedEventArgs e) => LoadTasks();
        private void ShowCompleted(object sender, RoutedEventArgs e) => LoadTasks();
    }
}

