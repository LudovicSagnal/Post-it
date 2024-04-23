const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to retrieve all users
router.get('/users', userController.allUsers);

// Route to add a new user
router.post('/users', userController.addUser);

module.exports = router;