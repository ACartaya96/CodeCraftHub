/**
 * Database Connection Utility
 * ---------------------------
 * This module handles the connection to a MongoDB database using Mongoose.
 * It exports a function `connectDB` that can be imported and executed in the
 * main server file (e.g., server.js or app.js) to establish a database connection.
 */

const mongoose = require('mongoose'); // Import Mongoose ODM (Object Data Modeling)

/**
 * Connect to MongoDB
 * ------------------
 * This async function attempts to connect to MongoDB using the MONGO_URI
 * stored in environment variables. If successful, it logs a success message.
 * If it fails, it logs the error and exits the process with status code 1.
 */
const connectDB = async () => {
    try {
        // Attempt to connect using connection string from environment variables
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,    // Use new MongoDB connection string parser
            useUnifiedTopology: true // Use new Server Discover and Monitoring engine
        });

        // Log success if connection is established
        console.log('✅ MongoDB connected successfully.');
    } catch (error) {
        // Log error message if connection fails
        console.error('❌ MongoDB connection failed:', error);

        // Exit process with failure (status code 1 means error)
        process.exit(1);
    }
};

// Export function so it can be used in other files
module.exports = connectDB;






















