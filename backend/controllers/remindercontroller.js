const Reminder = require('../models/reminder');

exports.createReminder = async (req, res) => {
  const { userId, title, description, dateTime } = req.body;
  try {
    await Reminder.create(userId, title, description, dateTime);
    res.status(201).json({ message: 'Reminder created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating reminder' });
  }
};

exports.getReminders = async (req, res) => {
  const { userId } = req.params;
  try {
    const reminders = await Reminder.findByUserId(userId);
    res.status(200).json(reminders);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching reminders' });
  }
};

exports.deleteReminder = async (req, res) => {
  const { id } = req.params;
  try {
    await Reminder.deleteById(id);
    res.status(200).json({ message: 'Reminder deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting reminder' });
  }
};