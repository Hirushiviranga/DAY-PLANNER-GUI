import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./todo.css";
import todo from "../../images/list.webp";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load tasks from localStorage on initial render
    const savedData = localStorage.getItem("data");
    if (savedData) {
      setTasks(JSON.parse(savedData));
    }
  }, []);

  const addTask = () => {
    if (inputValue.trim() === "") {
      alert("You Must Write Something!");
      return;
    }

    // Create a new task and update the list
    const newTask = { text: inputValue, checked: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveData(updatedTasks);
    setInputValue(""); // Clear the input field
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
    saveData(updatedTasks);
  };

  const removeTask = (index, e) => {
    e.stopPropagation(); // Stop event propagation
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    saveData(updatedTasks);
  };

  const saveData = (data) => {
    // Save tasks to localStorage
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h2>
          To-Do List
          <img src={todo} alt="" />
        </h2>
        <div className="row">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add Your Text"
          />
          <button onClick={addTask} className="btn">
            Add
          </button>
        </div>
        <ul className="list1">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={task.checked ? "checked" : ""}
              onClick={() => toggleTask(index)}
            >
              {task.text}
              <span onClick={(e) => removeTask(index, e)}>&times;</span>
            </li>
          ))}
        </ul>
        <div className="navigation-buttons">
          <button onClick={() => navigate("/reminder")}>Go to Reminders</button>
          <button onClick={() => navigate("/timetable")}>Go to Calendar</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;

