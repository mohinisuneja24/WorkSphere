const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register-user', async (req, res) => {
    const { name, email, skill } = req.body;
    try {
        const newUser = new User({ name, email, skill });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
