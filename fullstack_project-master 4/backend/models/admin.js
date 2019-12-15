const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let admin = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
})

module.exports = mongoose.model('admin',admin)
