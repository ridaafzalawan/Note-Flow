const express = require('express');
const User = require('../models/user');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "RIDA_IS_A_JZSIOSDNMNJKXDFJDJJIIDFKMNDFNMJISDJNS";

// Route 1 : Create a user using POST: "/api/auth/createuser"
router.post(
    '/createuser',
    [
        body('name', 'Enter a valid name').isLength({ min: 3 }),
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Password must be at least 3 characters long').isLength({ min: 3 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // Check if the user already exists
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "Sorry, a user with this email already exists" });
            }

            const salt = await bcrypt.genSalt(10);
            const secPassword = await bcrypt.hash(req.body.password, salt);

            // Create a new user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPassword,
            });

            const data = {
                user: {
                    id: user.id,
                },
            };
            const authToken = jwt.sign(data, JWT_SECRET);

            res.json({ authtoken: authToken });
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Internal Server Error");
        }
    }
);

// Route 2 : Validate a user using POST: "/api/auth/login"
router.post(
    '/login',
    [
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Password cannot be blank').exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ error: "Enter the correct credentials" });
            }

            const passwordCompare = await bcrypt.compare(password, user.password);
            if (!passwordCompare) {
                return res.status(400).json({ error: "Enter the correct credentials" });
            }

            const data = {
                user: {
                    id: user.id,
                },
            };
            const authToken = jwt.sign(data, JWT_SECRET);

            res.json({ authtoken: authToken });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
);

// Route 3 : Get a logged in user details using POST: "/api/auth/getuser"
router.post(
    '/getuser', fetchuser , async (req, res) => {
try {
    const userId = req.user.id;
    const user = await User.findOne({ _id: userId }).select("-password"); 
    res.send(user);
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
    })

module.exports = router;
