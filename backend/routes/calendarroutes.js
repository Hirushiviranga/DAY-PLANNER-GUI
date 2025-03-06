const express = require('express');
const calendarController = require('../controllers/calendarcontroller');

const router = express.Router();

router.post('/tasks', calendarcontroller.createTask);
router.get('/tasks/:userId', calendarcontroller.getTasks);
router.delete('/tasks/:id', calendarcontroller.deleteTask);

module.exports = router;