const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  breed: {type: String, required: true}
});

module.exports = dogSchema;