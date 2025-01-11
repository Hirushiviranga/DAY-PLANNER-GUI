/*import React, { useState, useEffect } from "react";
import "./remides.css";
import Sound from '../../images/sound.wav'
const reminders = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
  });
  const [reminders, setReminders] = useState([]);
  const [timeoutIds, setTimeoutIds] = useState([]);

  // Request notification permission on component mount
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission !== "granted") {
          alert("Please allow notifications for this app to work properly.");
        }
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addReminder = () => {
    const { title, description, date, time } = formData;

    if (!title || !description || !date || !time) {
      alert("All fields are required.");
      return;
    }

    const dateTimeString = `${date} ${time}`;
    const scheduledTime = new Date(dateTimeString);
    const currentTime = new Date();

    if (scheduledTime <= currentTime) {
      alert("The scheduled time must be in the future.");
      return;
    }

    const newReminder = { ...formData, dateTimeString };
    setReminders([...reminders, newReminder]);

    const delay = scheduledTime - currentTime;

    const timeoutId = setTimeout(() => {
      triggerNotification(title, description);
    }, delay);

    setTimeoutIds([...timeoutIds, timeoutId]);

    // Reset form
    setFormData({ title: "", description: "", date: "", time: "" });
  };

  const triggerNotification = (title, description) => {
    document.getElementById("notificationSound").play();

    if (Notification.permission === "granted") {
      new Notification(title, {
        body: description,
        requireInteraction: true,
      });
    } else {
      alert(`Reminder: ${title}\n${description}`);
    }
  };

  const deleteReminder = (index) => {
    clearTimeout(timeoutIds[index]);
    setTimeoutIds(timeoutIds.filter((_, i) => i !== index));
    setReminders(reminders.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>REMINDERS</h2>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <label htmlFor="date">Date</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <label htmlFor="time">Time</label>
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      />
      <button className="btn" onClick={addReminder}>
        ADD
      </button>
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
              <td>{reminder.dateTimeString}</td>
              <td>
                <button onClick={() => deleteReminder(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <audio src={Sound} id="notificationSound"></audio>
    </div>
  );
};

export default App;

*/