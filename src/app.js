/**
 * Application Entry Point
 * -----------------------
 * - Loads environment variables
 * - Connects to MongoDB
 * - Initializes Express server
 * - Registers routes & error handler
 * - Starts server on configured port
 */

require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const initServer = require('./config/server');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler');

// Initialize Express app
const app = initServer();

// Connect to database
connectDB();

// Register routes
app.use('/users', userRoutes);

// Global error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));