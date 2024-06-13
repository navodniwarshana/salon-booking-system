// src/routes/userRoutes.js
const router = require('express').Router();
let User = require('../models/User');

// Add a new user
router.post('/add', async (req, res) => {
  const { username, password, contactNumber, address, age, gender } = req.body;

  const newUser = new User({
    username,
    password,
    contactNumber,
    address,
    age,
    gender
  });

  try {
    await newUser.save();
    res.status(201).json('User Added');
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// Update a user
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { username, password, contactNumber, address, age, gender } = req.body;

  const updateUser = { username, password, contactNumber, address, age, gender };

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updateUser, { new: true });
    res.status(200).json({ status: 'User updated', user: updatedUser });
  } catch (err) {
    res.status(500).json({ status: 'Error updating data', error: err.message });
  }
});

// Delete a user
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ status: 'User deleted' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 'Error deleting user', error: err.message });
  }
});

// Get a user by ID
router.get('/get/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.status(200).json({ status: 'User fetched', user });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 'Error fetching user', error: err.message });
  }
});

module.exports = router;
