
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./reminders.css";

const Reminders = () => {
  const [reminders, setReminders] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  // Load reminders from localStorage when the component mounts
  useEffect(() => {
    const savedReminders = localStorage.getItem("reminders");
    if (savedReminders) {
      setReminders(JSON.parse(savedReminders)); // Load saved reminders
    }
  }, []);

  // Save reminders to localStorage whenever reminders state changes
  useEffect(() => {
    if (reminders.length > 0) {  // Prevent overwriting on initial load
      localStorage.setItem("reminders", JSON.stringify(reminders));
    }
  }, [reminders]);

  // Check for reminders that match the current time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentDateTime = now.toLocaleString();

      reminders.forEach((reminder) => {
        const reminderDateTime = new Date(reminder.dateTime).toLocaleString();
        if (reminderDateTime === currentDateTime) {
          alert(`Reminder: ${reminder.title}\n${reminder.description}`);
        }
      });
    }, 1000); 

    return () => clearInterval(interval); 
  }, [reminders]);

  const handleAddReminder = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !description || !date || !time) {
      alert("All fields are required.");
      return;
    }

    const newReminder = {
      title,
      description,
      dateTime: `${date} ${time}`,
    };

    setReminders((prevReminders) => [...prevReminders, newReminder]);

    // Clear form fields
    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
  };

  const handleDeleteReminder = (index) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);

    // Also update localStorage immediately
    localStorage.setItem("reminders", JSON.stringify(updatedReminders));
  };

  return (
    <div className="container">
      <form onSubmit={handleAddReminder}>
        <h2>Reminders</h2>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>

      <div className="reminders-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Date & Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reminders.map((reminder, index) => (
              <tr key={index}>
                <td>{reminder.title}</td>
                <td>{reminder.description}</td>
                <td>{reminder.dateTime}</td>
                <td>
                  <button
                    onClick={() => handleDeleteReminder(index)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="navigation-buttons">
        <button onClick={() => navigate("/todo")}>Go to Todo</button>
        <button onClick={() => navigate("/timetable")}>Go to Timetable</button>
      </div>
    </div>
  );
};

export default Reminders;

