import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./calendergrid.css";

const CalendarGrid = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks")) || {});
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (date, hour) => {
    const taskDescription = prompt(`Enter task for ${date} at ${hour}:`);
    if (taskDescription && taskDescription.trim()) {
      const key = `${date}-${hour}`;
      setTasks((prevTasks) => {
        const updatedTasks = { ...prevTasks };
        if (!updatedTasks[key]) updatedTasks[key] = [];
        updatedTasks[key].push(taskDescription.trim());
        return updatedTasks;
      });
    }
  };

  const handleDeleteTask = (date, hour, index) => {
    const key = `${date}-${hour}`;
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      updatedTasks[key].splice(index, 1);
      if (updatedTasks[key].length === 0) delete updatedTasks[key];
      return updatedTasks;
    });
  };

  return (
    <div className="calendar-grid">
      <div className="date-selector">
        <label htmlFor="date-select">Select Date: </label>
        <input
          type="date"
          id="date-select"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      <div className="day-header">
        <span className="day-name">{new Date(selectedDate).toLocaleDateString("en-US", { weekday: "long" })}</span>
        <span className="day-date">{selectedDate}</span>
      </div>
      <div className="time-grid">
        {hours.map((hour) => {
          const key = `${selectedDate}-${hour}`;
          return (
            <div key={hour} className="time-row">
              <span className="time-label">{hour}</span>
              <div className="hour-slot" onClick={() => handleAddTask(selectedDate, hour)}>
                {tasks[key] &&
                  tasks[key].map((task, index) => (
                    <div
                      key={index}
                      className="task-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTask(selectedDate, hour, index);
                      }}
                    >
                      {task}
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="navigation-buttons">
        <button onClick={() => navigate("/todo")}>Go to Todo</button>
        <button onClick={() => navigate("/reminder")}>Go to Reminders</button>
      </div>
    </div>
  );
};

export default CalendarGrid;








