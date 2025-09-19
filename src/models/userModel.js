/**
 * User Model
 * ----------
 * Defines the schema for application users:
 * - username, email, password
 * - role (student | instructor | admin)
 * - createdAt timestamp
 */

const mongoose = require('mongoose');

// Define schema structure
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // Must be provided
        unique: true    // No duplicate usernames
    },
    email: {
        type: String,
        required: true, // Must be provided
        unique: true    // No duplicate emails
    },
    password: {
        type: String,
        required: true  // Must be hashed before saving
    },
    role: {
        type: String,
        enum: ['student', 'instructor', 'admin'], // Allowed roles
        default: 'student' // Default role for new users
    },
    createdAt: {
        type: Date,
        default: Date.now // Auto set when created
    }
});

// Compile model from schema
const User = mongoose.model('User', userSchema);

module.exports = User;
