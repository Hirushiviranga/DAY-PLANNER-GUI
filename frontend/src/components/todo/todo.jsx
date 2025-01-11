import React, { useState } from 'react';
import styles from './todo.module.css';
import list from '../../images/list.webp';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [reminder, setReminder] = useState(false);

  const addTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        reminder: reminder,
      };
      setTasks([...tasks, task]);
      setNewTask('');
      setReminder(false);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.todoApp}>
        <h2 className={styles.title}>
          To-Do List
          <img src={list} alt="To-Do List Icon" width="50" height="50" />
        </h2>
        <div className={styles.row}>
          <input
            type="text"
            id="input-box"
            className={styles.inputBox}
            placeholder="Add Your Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={reminder}
              onChange={(e) => setReminder(e.target.checked)}
            />
            Add Reminder
          </label>
          <button className={styles.button} onClick={addTask}>
            Add
          </button>
        </div>
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <li key={task.id} className={styles.taskItem}>
              <span>{task.text}</span>
              {task.reminder && <span className={styles.reminderBadge}>Reminder</span>}
              <button className={styles.deleteButton} onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;


