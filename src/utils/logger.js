/**
 * Logger Configuration
 * --------------------
 * Uses Winston for logging:
 * - Logs errors to error.log file
 * - Logs all levels (default: info) to console
 */

const winston = require('winston');

// Create logger instance
const logger = winston.createLogger({
    level: 'info',                // Default log level
    format: winston.format.json(), // Log format (JSON)
    transports: [
        // Write error-level logs to file
        new winston.transports.File({ filename: 'error.log', level: 'error' }),

        // Output logs to console
        new winston.transports.Console()
    ]
});

module.exports = logger;
