const jwt = require("jsonwebtoken");

/**
 * Generates a JWT token with user data.
 * @param {Object} data - Payload to embed in the token (e.g. user info).
 * @returns {String} - Signed JWT token.
 */
const generateToken = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: "30d", // Token expires in 30 days
    });
};

module.exports = generateToken;
