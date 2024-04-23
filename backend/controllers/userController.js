const userModel = require('../models/user.model');

// Retrieve all users
module.exports.allUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users', error: err });
  }
};

// Add a new user
module.exports.addUser = async (req, res) => {
  const { username, email, password, photo } = req.body;

  const newUser = new userModel({
    username,
    email,
    password,
    photo,
  });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create a user', error: err });
  }
};