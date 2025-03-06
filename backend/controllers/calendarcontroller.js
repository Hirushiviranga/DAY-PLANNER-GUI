const CalendarTask = require('../models/calendartask');

exports.createTask = async (req, res) => {
  const { userId, day, hour, task } = req.body;
  try {
    await CalendarTask.create(userId, day, hour, task);
    res.status(201).json({ message: 'Task created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating task' });
  }
};

exports.getTasks = async (req, res) => {
  const { userId } = req.params;
  try {
    const tasks = await CalendarTask.findByUserId(userId);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await CalendarTask.deleteById(id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting task' });
  }
};