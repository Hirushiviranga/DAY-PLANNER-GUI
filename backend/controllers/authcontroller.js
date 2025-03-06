const User = require('../models/user');

exports.signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    await User.create(username, password);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findByUsername(username);
    if (user && user.password === password) {
      res.status(200).json({ message: 'Login successful', userId: user.id });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
};