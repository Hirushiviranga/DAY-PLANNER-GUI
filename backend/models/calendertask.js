const db = require('../config/db');

class CalendarTask {
  static async create(userId, day, hour, task) {
    const [result] = await db.execute(
      'INSERT INTO calendar_tasks (user_id, day, hour, task) VALUES (?, ?, ?, ?)',
      [userId, day, hour, task]
    );
    return result;
  }

  static async findByUserId(userId) {
    const [rows] = await db.execute('SELECT * FROM calendar_tasks WHERE user_id = ?', [userId]);
    return rows;
  }

  static async deleteById(id) {
    const [result] = await db.execute('DELETE FROM calendar_tasks WHERE id = ?', [id]);
    return result;
  }
}

module.exports = CalendarTask;