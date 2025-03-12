/*using System.Windows;

namespace DataBaseApp
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void GetStarted_Click(object sender, RoutedEventArgs e)
        {
            TodoWindow todoWindow = new TodoWindow();
            todoWindow.Show();
            this.Close(); // Close the home page
        }
    }
}*/
using System.Windows;
/*using System.Windows.Controls;

namespace DataBaseApp
{
    public partial class HomePage : Page
    {
        public HomePage()
        {
            InitializeComponent();
        }

        private void GetStarted_Click(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new ToDoPage());
        }
    }
}
*/
using System.Windows;
using System.Windows.Controls;

namespace DataBaseApp
{
    public partial class HomePage : Page
    {
        public HomePage()
        {
            InitializeComponent();
        }

        private void NavigateToAboutUs_Click(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new AboutUsPage());
        }

        private void NavigateToContactUs_Click(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new ContactUsPage());
        }

        private void GetStarted_Click(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new ToDoPage());
        }
    }
}