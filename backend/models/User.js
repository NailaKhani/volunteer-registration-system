const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  city: { type: String },
  skills: { type: String },
  availability: { type: String },
  role: { type: String, default: 'volunteer', enum: ['volunteer', 'admin'] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
