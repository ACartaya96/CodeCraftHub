// Import the necessary modules
const express = require('express');
// Correctly import the registerUser and loginUser functions
const { registerUser, loginUser } = require('../controllers/userController');

// Create a new router instance
const router = express.Router();

// Define the route for user registration
router.post('/register', registerUser);
// Define the route for user login
router.post('/login', loginUser);

// Export the router to be used in other parts of the application
module.exports = router;