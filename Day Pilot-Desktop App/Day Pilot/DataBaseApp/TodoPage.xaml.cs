/*using System.Linq;
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
            ShowToDo(null, null); // Load To-Do tasks by default
        }

        private void ShowToDo(object sender, RoutedEventArgs e) => LoadTasks("To-Do");
        private void ShowProgress(object sender, RoutedEventArgs e) => LoadTasks("Progress");
        private void ShowCompleted(object sender, RoutedEventArgs e) => LoadTasks("Completed");

        private void LoadTasks(string status)
        {
            TaskPanel.Children.Clear();
            var tasks = _db.Tasks.Where(t => t.Status == status).ToList();

            foreach (var task in tasks)
            {
                TaskPanel.Children.Add(CreateTaskCard(task));
            }
        }

        private Border CreateTaskCard(Task task)
        {
            Button deleteButton = new Button { Content = "Delete", Tag = task.Id, Margin = new Thickness(5) };
            deleteButton.Click += DeleteTask;

            Border card = new Border
            {
                BorderThickness = new Thickness(2),
                Padding = new Thickness(10),
                Margin = new Thickness(10),
                Background = Brushes.LightBlue,
                Child = new StackPanel
                {
                    Children =
                    {
                        new TextBlock { Text = task.Name, FontSize = 16, FontWeight = FontWeights.Bold },
                        new TextBlock { Text = $"Date: {task.Date:yyyy-MM-dd}" },
                        new TextBlock { Text = $"Time: {task.Time}" },
                        deleteButton
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
                LoadTasks(task.Status);
            }
        }
    }
}*/
/*using System;
using System.Linq;
using System.Windows;
using System.Windows.Controls;

namespace DataBaseApp
{
    public partial class TodoWindow : Window
    {
        private ProductDbContext _db = new ProductDbContext();

        public TodoWindow()
        {
            InitializeComponent();
            LoadTasks();
        }

        private void LoadTasks()
        {
            TaskListPanel.Children.Clear();
            var tasks = _db.Tasks.ToList();

            foreach (var task in tasks)
            {
                StackPanel taskPanel = new StackPanel { Orientation = Orientation.Horizontal, Margin = new Thickness(5) };

                TextBlock taskText = new TextBlock
                {
                    Text = task.Name,
                    Width = 300,
                    Foreground = System.Windows.Media.Brushes.White
                };

                Button completeButton = new Button
                {
                    Content = "Complete",
                    Background = System.Windows.Media.Brushes.Green,
                    Foreground = System.Windows.Media.Brushes.White,
                    Width = 80,
                    Tag = task
                };
                completeButton.Click += CompleteTask;

                Button editButton = new Button
                {
                    Content = "Edit",
                    Background = System.Windows.Media.Brushes.Blue,
                    Foreground = System.Windows.Media.Brushes.White,
                    Width = 60,
                    Tag = task
                };
                editButton.Click += EditTask;

                Button deleteButton = new Button
                {
                    Content = "Delete",
                    Background = System.Windows.Media.Brushes.Red,
                    Foreground = System.Windows.Media.Brushes.White,
                    Width = 70,
                    Tag = task
                };
                deleteButton.Click += DeleteTask;

                taskPanel.Children.Add(taskText);
                taskPanel.Children.Add(completeButton);
                taskPanel.Children.Add(editButton);
                taskPanel.Children.Add(deleteButton);

                TaskListPanel.Children.Add(taskPanel);
            }
        }

        private void AddTask(object sender, RoutedEventArgs e)
        {
            if (!string.IsNullOrWhiteSpace(TaskNameBox.Text))
            {
                Task newTask = new Task { Name = TaskNameBox.Text, Date = DateTime.Now, Time = DateTime.Now.TimeOfDay, IsCompleted = false };
                _db.Tasks.Add(newTask);
                _db.SaveChanges();
                LoadTasks();
                TaskNameBox.Clear();
            }
        }

        private void EditTask(object sender, RoutedEventArgs e)
        {
            Button btn = sender as Button;
            Task task = (Task)btn.Tag;

            TaskWindow taskWindow = new TaskWindow(task);
            if (taskWindow.ShowDialog() == true)
            {
                _db.SaveChanges();
                LoadTasks();
            }
        }

        private void DeleteTask(object sender, RoutedEventArgs e)
        {
            Button btn = sender as Button;
            Task task = (Task)btn.Tag;

            _db.Tasks.Remove(task);
            _db.SaveChanges();
            LoadTasks();
        }

        private void CompleteTask(object sender, RoutedEventArgs e)
        {
            Button btn = sender as Button;
            Task task = (Task)btn.Tag;

            CompletedTask completedTask = new CompletedTask { Name = task.Name, Date = task.Date, Time = task.Time };
            _db.CompletedTasks.Add(completedTask);
            _db.Tasks.Remove(task);

            _db.SaveChanges();
            LoadTasks();
        }

        private void ShowTodoTasks(object sender, RoutedEventArgs e)
        {
            TaskListPanel.Children.Clear();
            var tasks = _db.Tasks.Where(t => !t.IsCompleted).ToList();
            foreach (var task in tasks)
            {
                TaskListPanel.Children.Add(new TextBlock { Text = task.Name, Foreground = System.Windows.Media.Brushes.White });
            }
        }

        private void ShowInProgressTasks(object sender, RoutedEventArgs e)
        {
            // Placeholder for future in-progress logic
        }

        private void ShowCompletedTasks(object sender, RoutedEventArgs e)
        {
            TaskListPanel.Children.Clear();
            var tasks = _db.CompletedTasks.ToList();
            foreach (var task in tasks)
            {
                TaskListPanel.Children.Add(new TextBlock { Text = task.Name, Foreground = System.Windows.Media.Brushes.White });
            }
        }
    }
}*/
/*using System.Linq;
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
            ShowToDo(null, null); // Load To-Do tasks by default
        }

        private void ShowToDo(object sender, RoutedEventArgs e) => LoadTasks("To-Do");
        private void ShowProgress(object sender, RoutedEventArgs e) => LoadTasks("Progress");
        private void ShowCompleted(object sender, RoutedEventArgs e) => LoadTasks("Completed");

        private void LoadTasks(string status)
        {
            TaskPanel.Children.Clear();
            var tasks = _db.Tasks.Where(t => t.Status == status).ToList();

            foreach (var task in tasks)
            {
                TaskPanel.Children.Add(CreateTaskCard(task));
            }
        }

        private Border CreateTaskCard(Task task)
        {
            Button deleteButton = new Button { Content = "Delete", Tag = task.Id, Margin = new Thickness(5) };
            deleteButton.Click += DeleteTask;

            Button moveButton = new Button { Content = "Move to " + (task.Status == "To-Do" ? "In Progress" : "Completed"), Tag = task.Id, Margin = new Thickness(5) };
            moveButton.Click += MoveTask;

            Border card = new Border
            {
                BorderThickness = new Thickness(2),
                Padding = new Thickness(10),
                Margin = new Thickness(10),
                Background = Brushes.LightBlue,
                Child = new StackPanel
                {
                    Children =
                    {
                        new TextBlock { Text = task.Name, FontSize = 16, FontWeight = FontWeights.Bold },
                        new TextBlock { Text = $"Date: {task.Date:yyyy-MM-dd}" },
                        new TextBlock { Text = $"Time: {task.Time}" },
                        deleteButton,
                        moveButton
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
                LoadTasks(task.Status);
            }
        }

        private void MoveTask(object sender, RoutedEventArgs e)
        {
            int taskId = (int)((Button)sender).Tag;
            var task = _db.Tasks.Find(taskId);
            if (task != null)
            {
                if (task.Status == "To-Do")
                {
                    task.Status = "Progress";
                }
                else if (task.Status == "Progress")
                {
                    task.Status = "Completed";
                }
                _db.SaveChanges();
                LoadTasks(task.Status);
            }
        }

        /*private void AddTask_Click(object sender, RoutedEventArgs e)
        {
            Task newTask = new Task { Name = "New Task", Date = DateTime.Now, Time = TimeSpan.Zero, Status = "To-Do", IsCompleted = false };
            _db.Tasks.Add(newTask);
            _db.SaveChanges();
            LoadTasks("To-Do");
        }*/
/* private void AddTask_Click(object sender, RoutedEventArgs e)
 {
     TaskWindow taskWindow = new TaskWindow();
     if (taskWindow.ShowDialog() == true)
     {
         LoadTasks("To-Do"); // Refresh the task list
     }
 }
}
}
*/
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
                BorderThickness = new Thickness(0), // No border
                Padding = new Thickness(10), // Padding inside the border
                Margin = new Thickness(10), // Margin outside the border
                Background = new SolidColorBrush(Color.FromArgb(0x80, 0xFF, 0xFF, 0xFF)), // Semi-transparent white (#80FFFFFF)
                CornerRadius = new CornerRadius(10), // Rounded corners
            
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

        private void ShowToDo(object sender, RoutedEventArgs e) => LoadTasks();
        private void ShowInProgress(object sender, RoutedEventArgs e) => LoadTasks();
        private void ShowCompleted(object sender, RoutedEventArgs e) => LoadTasks();
    }
}
