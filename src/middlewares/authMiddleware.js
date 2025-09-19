/**
 * Authentication Middleware
 * -------------------------
 * Verifies JWT from the Authorization header.
 * - Expects header format: "Authorization: Bearer <token>"
 * - Attaches decoded payload to req.user if valid
 * - Denies access if missing/invalid
 */

const jwt = require('jsonwebtoken');

/**
 * JWT Authentication Middleware
 * @param {import('express').Request} req  Express request object
 * @param {import('express').Response} res Express response object
 * @param {import('express').NextFunction} next Next middleware function
 */
const authMiddleware = (req, res, next) => {
    // Extract token from "Authorization" header
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access denied.' });

    try {
        // Verify token and attach decoded user info to request
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid token.' });
    }
};

module.exports = authMiddleware;
