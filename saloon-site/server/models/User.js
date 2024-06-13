// src/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
