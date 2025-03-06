/*using System.Linq;
using System.Windows;

namespace DataBaseApp
{
    public partial class MainWindow : Window
    {
        private ProductDbContext _db = new ProductDbContext();

        public MainWindow()
        {
            InitializeComponent();
            LoadData();
        }

        private void LoadData()
        {
            taskDrid.ItemsSource = _db.Tasks.ToList();
        }

        private void Add_Task(object sender, RoutedEventArgs e)
        {
            Task task = new Task();
            TaskWindow taskWindow = new TaskWindow(task);

            if (taskWindow.ShowDialog() == true)
            {
                _db.Tasks.Add(task);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void Update_Task(object sender, RoutedEventArgs e)
        {
            if (taskDrid.SelectedItem is Task selectedTask)
            {
                Task updatedTask = new Task()
                {
                    Id = selectedTask.Id,
                    Name = selectedTask.Name,
                    Date = selectedTask.Date,
                    Time = selectedTask.Time,
                    IsCompleted = selectedTask.IsCompleted
                };

                TaskWindow taskWindow = new TaskWindow(updatedTask);
                if (taskWindow.ShowDialog() == true)
                {
                    selectedTask.Name = updatedTask.Name;
                    selectedTask.Date = updatedTask.Date;
                    selectedTask.Time = updatedTask.Time;
                    selectedTask.IsCompleted = updatedTask.IsCompleted;

                    _db.Tasks.Update(selectedTask);
                    _db.SaveChanges();
                    LoadData();
                }
            }
        }

        private void Delete_Task(object sender, RoutedEventArgs e)
        {
            if (taskDrid.SelectedItem is Task selectedTask)
            {
                _db.Tasks.Remove(selectedTask);
                _db.SaveChanges();
                LoadData();
            }
        }
    }
}*/
/*using System.Linq;
using System.Windows;

namespace DataBaseApp
{
    public partial class MainWindow : Window
    {
        private ProductDbContext _db = new ProductDbContext();

        public MainWindow()
        {
            InitializeComponent();
            LoadData();
        }

        private void LoadData()
        {
            taskDrid.ItemsSource = _db.Tasks.ToList();
        }

        private void LoadCompletedTasks()
        {
            completedTaskGrid.ItemsSource = _db.CompletedTasks.ToList();
        }

        private void Add_Task(object sender, RoutedEventArgs e)
        {
            Task task = new Task();
            TaskWindow taskWindow = new TaskWindow(task);

            if (taskWindow.ShowDialog() == true)
            {
                _db.Tasks.Add(task);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void Update_Task(object sender, RoutedEventArgs e)
        {
            if (taskDrid.SelectedItem is Task selectedTask)
            {
                TaskWindow taskWindow = new TaskWindow(selectedTask);
                if (taskWindow.ShowDialog() == true)
                {
                    _db.Tasks.Update(selectedTask);
                    _db.SaveChanges();
                    LoadData();
                }
            }
        }

        private void Delete_Task(object sender, RoutedEventArgs e)
        {
            if (taskDrid.SelectedItem is Task selectedTask)
            {
                _db.Tasks.Remove(selectedTask);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void Complete_Task(object sender, RoutedEventArgs e)
        {
            if (taskDrid.SelectedItem is Task selectedTask)
            {
                CompletedTask completedTask = new CompletedTask
                {
                    Name = selectedTask.Name,
                    Date = selectedTask.Date,
                    Time = selectedTask.Time
                };

                _db.CompletedTasks.Add(completedTask);
                _db.Tasks.Remove(selectedTask);
                _db.SaveChanges();

                LoadData();
                LoadCompletedTasks();
            }
        }
    }
}*/
/*using System.Windows;
using System.Windows.Navigation;

namespace DataBaseApp
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void NavigateToToDoApp(object sender, RoutedEventArgs e)
        {
            MainFrame.Navigate(new ToDoPage());
        }
    }
}*/
/*using System.Windows;

namespace DataBaseApp
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            MainFrame.Content = new HomePage(); // Set HomePage as default
        }
    }
}

*/
using System.Windows;

namespace DataBaseApp
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            MainFrame.Navigate(new HomePage());
        }
    }
}