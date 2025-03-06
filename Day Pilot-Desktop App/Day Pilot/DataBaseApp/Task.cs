/*using System;

namespace DataBaseApp
{
    public class Task
    {
        public int Id { get; set; }  // Primary Key
        public string Name { get; set; }  // Task Name
        public DateTime Date { get; set; }  // Task Date
        public TimeSpan Time { get; set; }  // Task Time
        public bool IsCompleted { get; set; }  // Task Completion Status
    }
}*/
/*using System;

namespace DataBaseApp
{
    public class Task
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Time { get; set; }
        public string Status { get; set; }
        public bool IsCompleted { get; set; } // "To-Do", "Progress", "Completed"
    }
}*/
using System;

namespace DataBaseApp
{
    public class Task
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty; // Initialize to avoid null
        public DateTime Date { get; set; }
        public TimeSpan Time { get; set; }
        public string Status { get; set; } = "To-Do"; // Initialize to avoid null
        public bool IsCompleted { get; set; }
    }
}
