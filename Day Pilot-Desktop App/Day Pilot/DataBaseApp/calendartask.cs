using System;

namespace DataBaseApp
{
    public class CalendarTask
    {
        public int Id { get; set; }
        public string TaskName { get; set; } = string.Empty;
        public DateTime Date { get; set; }
        public TimeSpan Time { get; set; }
    }
}