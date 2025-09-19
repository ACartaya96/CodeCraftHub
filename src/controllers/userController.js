/**
 * User Controller
 * ---------------
 * Handles user registration and login:
 * - registerUser: Hashes password, saves user, returns success response
 * - loginUser: Validates credentials, returns JWT on success
 */

const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * Register a new user
 * @route   POST /api/users/register
 * @access  Public
 */
exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save user
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed.' });
    }
};

/**
 * Login user
 * @route   POST /api/users/login
 * @access  Public
 */
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: 'User not found.' });

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid credentials.' });

        // Generate JWT
        const token = jwt.sign(
            { id: user._id }, 
            process.env.JWT_SECRET || 'secret', 
            { expiresIn: '1h' }
        );

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Login failed.' });
    }
};
