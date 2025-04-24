const usersModel = require('../models/users.models');
const getAllUsers = async (req, res) => {
  try {
    const users = await usersModel.getUsers();

    if (!users || users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
