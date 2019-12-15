const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Game = new Schema({
  name: {
    type: String
  },
  publisher: {
    type: String
  },
  release: {
    type: Number
  },
  genre: {
    type: String
  },
  creator: {
    type: String
  },
  restricted_age:{
    type: Number
  }
})

module.exports = mongoose.model('game', Game)
