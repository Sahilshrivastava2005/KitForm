const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

module.exports.registerUser = async function (req, res) {
    const { email, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(400).send("Account already exists.");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await userModel.create({
            email,
            password: hashedPassword,
        });

        const token = generateToken({ email });
        console.log(token);
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        });

        return res.status(201).json({ message: "User registered successfully", user: newUser,token});
    } catch (err) {
        console.error(err);
        return res.status(500).send("Server error during registration.");
    }
};

module.exports.loginUser = async function (req, res) {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).send("User does not exist.");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).send("Invalid credentials.");
        }

        const token = generateToken({ email });

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        });

        
        return res.status(200).json({ message: "User login successfully", user: user,token});
    } catch (err) {
        console.error(err);
        return res.status(500).send("Server error during login.");
    }
};

module.exports.logoutUser = function (req, res) {
    res.cookie("token", "", {
        httpOnly: true,
        secure: true,
        expires: new Date(0),
    });

    return res.status(200).send("Logged out successfully.");
};

module.exports.getUserProfile = function (req, res) {
    // Assume `req.user` is set by authentication middleware
    if (!req.user) {
        return res.status(401).send("Unauthorized");
    }

    res.status(200).json({ user: req.user });
};

// Optional placeholder for Google OAuth
module.exports.googleOauth = function (req, res) {
    res.status(501).send("Google OAuth not implemented yet.");
};
