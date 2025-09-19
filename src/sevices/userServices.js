/**
 * User Service
 * ------------
 * Provides helper functions for working with User data.
 */

const User = require('../models/userModel');

/**
 * Find user by ID
 * @param {string} userId - MongoDB ObjectId of the user
 * @returns {Promise<Object|null>} User document or null if not found
 */
exports.findUserById = async (userId) => {
    return await User.findById(userId);
};
