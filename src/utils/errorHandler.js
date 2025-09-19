/**
 * Global Error Handler
 * --------------------
 * Logs errors and sends a generic 500 response.
 * Should be placed after all routes in Express.
 */

const logger = require('./logger');

/**
 * Express error-handling middleware
 * @param {Error} err - Error object
 * @param {import('express').Request} req - Express request
 * @param {import('express').Response} res - Express response
 * @param {import('express').NextFunction} next - Next middleware
 */
const errorHandler = (err, req, res, next) => {
    // Log error details
    logger.error(err);

    // Send generic error response
    res.status(500).json({ error: 'Something went wrong.' });
};

module.exports = errorHandler;
