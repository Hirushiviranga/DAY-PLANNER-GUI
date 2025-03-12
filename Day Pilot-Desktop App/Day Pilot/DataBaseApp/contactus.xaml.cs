using System.Windows;
using System.Windows.Controls;

namespace DataBaseApp
{
    public partial class ContactUsPage : Page
    {
        public ContactUsPage()
        {
            InitializeComponent();
        }

        private void Back_Click(object sender, RoutedEventArgs e)
        {
            // Navigate back to the Home Page
            NavigationService.Navigate(new HomePage());
        }
    }
}