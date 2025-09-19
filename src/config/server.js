/**
 * Express Server Initialization
 * -----------------------------
 * Sets up an Express app with:
 * - CORS enabled
 * - JSON body parsing
 * Returns the configured app instance.
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

/**
 * Initialize and configure Express server
 * @returns {import('express').Application} Configured Express app
 */
const initServer = () => {
    const app = express();

    // Enable Cross-Origin Resource Sharing
    app.use(cors());

    // Parse incoming JSON request bodies
    app.use(bodyParser.json());

    return app;
};

module.exports = initServer;