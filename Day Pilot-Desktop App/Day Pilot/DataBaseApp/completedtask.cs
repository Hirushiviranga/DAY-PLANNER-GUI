using System;

namespace DataBaseApp
{
    public class CompletedTask
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Time { get; set; }
    }
}
