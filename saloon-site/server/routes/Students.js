const express = require('express');
const router = express.Router();
const LoginInfo = require('../models/student');

// Get all LoginInfos
router.get('/', async (req, res) => {
    try {
        const loginInfos = await LoginInfo.find();
        res.status(200).json(loginInfos);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Add a new LoginInfo
router.post('/add', async (req, res) => {
    const { name, age,gender } = req.body;

    const newLoginInfo = new LoginInfo({
        name,
        age,
        gender
    });

    try {
        await newLoginInfo.save();
        res.status(201).json('User Added');
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

// Get LoginInfo By ID
router.get('/:id', async (req, res) => {
    try {
        const loginInfo = await LoginInfo.findById(req.params.id);
        if (!loginInfo) {
            return res.status(404).json({ message: 'LoginInfo not found' });
        }
        res.status(200).json(loginInfo);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Update LoginInfo By ID
router.put('/:id', async (req, res) => {
    const { username, password } = req.body;
    const updateData = { username, password };

    try {
        const updatedLoginInfo = await LoginInfo.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updatedLoginInfo) {
            return res.status(404).json({ message: 'LoginInfo not found' });
        }
        res.status(200).json({ message: 'LoginInfo updated', loginInfo: updatedLoginInfo });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Delete LoginInfo By ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedLoginInfo = await LoginInfo.findByIdAndDelete(req.params.id);
        if (!deletedLoginInfo) {
            return res.status(404).json({ message: 'LoginInfo not found' });
        }
        res.status(200).json({ message: 'LoginInfo deleted' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
