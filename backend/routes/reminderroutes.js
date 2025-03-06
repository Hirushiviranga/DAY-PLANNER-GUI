const express = require('express');
const reminderController = require('../controllers/remindercontroller');

const router = express.Router();

router.post('/reminders', remindercontroller.createReminder);
router.get('/reminders/:userId', remindercontroller.getReminders);
router.delete('/reminders/:id', remindercontroller.deleteReminder);

module.exports = router;