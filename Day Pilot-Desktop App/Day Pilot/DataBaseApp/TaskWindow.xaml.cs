/*using System;
using System.Windows;

namespace DataBaseApp
{
    public partial class TaskWindow : Window
    {
        public Task Task { get; private set; }

        public TaskWindow(Task task)
        {
            InitializeComponent();
            Task = task;
            NameTextBox.Text = task.Name;
            DateTextBox.Text = task.Date.ToString("yyyy-MM-dd");
            TimeTextBox.Text = task.Time.ToString(@"hh\:mm");
            IsCompletedCheckBox.IsChecked = task.IsCompleted;
        }

        private void Save_task(object sender, RoutedEventArgs e)
        {
            try
            {
                Task.Name = NameTextBox.Text;
                Task.Date = DateTime.Parse(DateTextBox.Text);
                Task.Time = TimeSpan.Parse(TimeTextBox.Text);
                Task.IsCompleted = IsCompletedCheckBox.IsChecked ?? false;

                DialogResult = true;
                Close();
            }
            catch
            {
                MessageBox.Show("Invalid input! Please enter correct values.");
                DialogResult = false;
            }
        }

        private void Cancel_Btn(object sender, RoutedEventArgs e)
        {
            Close();
        }
    }
}*/
/*using System;
using System.Windows;

namespace DataBaseApp
{
    public partial class TaskWindow : Window
    {
        private ProductDbContext _db = new ProductDbContext();
        public Task Task { get; private set; }

        public TaskWindow(Task task)
        {
            InitializeComponent();
            Task = task;
            NameTextBox.Text = task.Name;
            DateTextBox.Text = task.Date.ToString("yyyy-MM-dd");
            TimeTextBox.Text = task.Time.ToString(@"hh\:mm");
            IsCompletedCheckBox.IsChecked = task.IsCompleted;
        }

        private void Save_task(object sender, RoutedEventArgs e)
        {
            try
            {
                Task.Name = NameTextBox.Text;
                Task.Date = DateTime.Parse(DateTextBox.Text);
                Task.Time = TimeSpan.Parse(TimeTextBox.Text);
               Task.IsCompleted = IsCompletedCheckBox.IsChecked ?? false;

                if (Task.IsCompleted)
                {
                    //Transfer to CompletedTasks table
                    CompletedTask completedTask = new CompletedTask
                    {
                        Name = Task.Name,
                        Date = Task.Date,
                        Time = Task.Time
                    };

                    _db.CompletedTasks.Add(completedTask);
                    _db.Tasks.Remove(Task); // Remove from active tasks
                }

                _db.SaveChanges();
                DialogResult = true;
                Close();
            }
            catch
            {
                MessageBox.Show("Invalid input! Please enter correct values.");
                DialogResult = false;
            }
        }

        private void Cancel_Btn(object sender, RoutedEventArgs e)
        {
            Close();
        }
    }
}*/
/*using System;
using System.Windows;

namespace DataBaseApp
{
    public partial class TaskWindow : Window
    {
        private ProductDbContext _db = new ProductDbContext();
        public Task Task { get; private set; }

        public TaskWindow(Task task)
        {
            InitializeComponent();
            Task = task;
            NameTextBox.Text = task.Name;
            DateTextBox.Text = task.Date.ToString("yyyy-MM-dd");
            TimeTextBox.Text = task.Time.ToString(@"hh\:mm");
            IsCompletedCheckBox.IsChecked = task.IsCompleted;
        }

        private void Save_task(object sender, RoutedEventArgs e)
        {
            try
            {
                Task.Name = NameTextBox.Text;
                Task.Date = DateTime.Parse(DateTextBox.Text);
                Task.Time = TimeSpan.Parse(TimeTextBox.Text);
                Task.IsCompleted = IsCompletedCheckBox.IsChecked ?? false;

                _db.SaveChanges();
                DialogResult = true;
                Close();
            }
            catch
            {
                MessageBox.Show("Invalid input! Please enter correct values.");
                DialogResult = false;
            }
        }

        private void Cancel_Btn(object sender, RoutedEventArgs e)
        {
            Close();
        }
    }
}*/
/*using System;
using System.Windows;

namespace DataBaseApp
{
    public partial class TaskWindow : Window
    {
        private ProductDbContext _db = new ProductDbContext();
        public Task Task { get; private set; }

        // Constructor for adding a new task
        public TaskWindow()
        {
            InitializeComponent();
            Task = new Task { Name = "", Date = DateTime.Now, Time = TimeSpan.Zero, Status = "To-Do", IsCompleted = false };
        }

        // Constructor for editing an existing task
        public TaskWindow(Task task)
        {
            InitializeComponent();
            Task = task;
            NameTextBox.Text = task.Name;
            DateTextBox.Text = task.Date.ToString("yyyy-MM-dd");
            TimeTextBox.Text = task.Time.ToString(@"hh\:mm");
            IsCompletedCheckBox.IsChecked = task.IsCompleted;
        }

        private void Save_task(object sender, RoutedEventArgs e)
        {
            try
            {
                Task.Name = NameTextBox.Text;
                Task.Date = DateTime.Parse(DateTextBox.Text);
                Task.Time = TimeSpan.Parse(TimeTextBox.Text);
                Task.IsCompleted = IsCompletedCheckBox.IsChecked ?? false;

                if (Task.Id == 0) // New task
                {
                    _db.Tasks.Add(Task);
                }

                _db.SaveChanges();
                DialogResult = true;
                Close();
            }
            catch
            {
                MessageBox.Show("Invalid input! Please enter correct values.");
                DialogResult = false;
            }
        }

        private void Cancel_Btn(object sender, RoutedEventArgs e)
        {
            Close();
        }
    }
}*/
/*using System;
using System.Windows;

namespace DataBaseApp
{
    public partial class TaskWindow : Window
    {
        private ProductDbContext _db = new ProductDbContext();
        public Task Task { get; private set; }

        // Constructor for adding a new task
        public TaskWindow()
        {
            InitializeComponent();
            Task = new Task { Name = "", Date = DateTime.Now, Time = TimeSpan.Zero, Status = "To-Do", IsCompleted = false };
            DatePicker.SelectedDate = DateTime.Now; // Set default date to today
            TimeTextBox.Text = DateTime.Now.ToString("HH:mm"); // Set default time to current time
        }

        // Constructor for editing an existing task
        public TaskWindow(Task task)
        {
            InitializeComponent();
            Task = task;
            NameTextBox.Text = task.Name;
            DatePicker.SelectedDate = task.Date;
            TimeTextBox.Text = task.Time.ToString(@"hh\:mm");
            IsCompletedCheckBox.IsChecked = task.IsCompleted;
        }

        private void Save_task(object sender, RoutedEventArgs e)
        {
            try
            {
                Task.Name = NameTextBox.Text;
                Task.Date = DatePicker.SelectedDate ?? DateTime.Now; // Use selected date or default to today
                Task.Time = TimeSpan.Parse(TimeTextBox.Text);
                Task.IsCompleted = IsCompletedCheckBox.IsChecked ?? false;

                if (Task.Id == 0) // New task
                {
                    _db.Tasks.Add(Task);
                }

                _db.SaveChanges();
                DialogResult = true;
                Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Invalid input! Please enter correct values. Error: {ex.Message}");
                DialogResult = false;
            }
        }

        private void Cancel_Btn(object sender, RoutedEventArgs e)
        {
            Close();
        }
    }
}*/
using System;
using System.Windows;

namespace DataBaseApp
{
    public partial class TaskWindow : Window
    {
        private ProductDbContext _db = new ProductDbContext();
        public Task Task { get; private set; }

        public TaskWindow()
        {
            InitializeComponent();
            Task = new Task { Name = "", Date = DateTime.Now, Time = TimeSpan.Zero, Status = "To-Do" };
            DatePicker.SelectedDate = DateTime.Now;
            TimeTextBox.Text = DateTime.Now.ToString("HH:mm");
        }

        public TaskWindow(Task task)
        {
            InitializeComponent();
            Task = task;
            NameTextBox.Text = task.Name;
            DatePicker.SelectedDate = task.Date;
            TimeTextBox.Text = task.Time.ToString(@"hh\:mm");
        }

        private void Save_task(object sender, RoutedEventArgs e)
        {
            try
            {
                Task.Name = NameTextBox.Text;
                Task.Date = DatePicker.SelectedDate ?? DateTime.Now;
                Task.Time = TimeSpan.Parse(TimeTextBox.Text);

                if (Task.Id == 0)
                {
                    _db.Tasks.Add(Task);
                }

                _db.SaveChanges();
                DialogResult = true;
                Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Invalid input! Please enter correct values. Error: {ex.Message}");
                DialogResult = false;
            }
        }

        private void Cancel_Btn(object sender, RoutedEventArgs e)
        {
            Close();
        }
    }
}
