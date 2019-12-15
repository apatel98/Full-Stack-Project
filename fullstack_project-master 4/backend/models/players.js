const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Players = new Schema({
  playername: {
    type: String
  },
  status: {
    type: String
  },
  rank: {
    type: Number
  },
  favouritegame: {
    type: String
  },
  score: {
    type: Number
  },
  time: {
    type: String
  }
})

const PlayerList = module.exports = mongoose.model('players', Players)

module.exports.addPlayer = function(newPlayer, callback){
  newPlayer.save(callback);
}

module.exports.getAllPlayers = (callback) =>{
  PlayerList.find(callback);
}