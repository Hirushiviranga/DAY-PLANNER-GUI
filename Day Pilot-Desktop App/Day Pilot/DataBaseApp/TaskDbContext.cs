
using Microsoft.EntityFrameworkCore;

namespace DataBaseApp
{
    public class ProductDbContext : DbContext
    {
        public DbSet<Task> Tasks { get; set; }
        public DbSet<CalendarTask> CalendarTasks { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=C:\temp\todo_app.db");
        }
    }
}

