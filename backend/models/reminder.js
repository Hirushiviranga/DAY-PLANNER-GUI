const db = require('../config/db');

class Reminder {
  static async create(userId, title, description, dateTime) {
    const [result] = await db.execute(
      'INSERT INTO reminders (user_id, title, description, date_time) VALUES (?, ?, ?, ?)',
      [userId, title, description, dateTime]
    );
    return result;
  }

  static async findByUserId(userId) {
    const [rows] = await db.execute('SELECT * FROM reminders WHERE user_id = ?', [userId]);
    return rows;
  }

  static async deleteById(id) {
    const [result] = await db.execute('DELETE FROM reminders WHERE id = ?', [id]);
    return result;
  }
}

module.exports = Reminder;