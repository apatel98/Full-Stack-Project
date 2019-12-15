const express = require('express');
const app = express();
const gameRoute = express.Router();

// Game model
const Game = require('../models/game');

// Add Game
gameRoute.route('/add').post((req, res, next) => {
  Game.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all Game
gameRoute.route('/all').get((req, res) => {
  Game.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Game
gameRoute.route('/:id').get((req, res) => {
  Game.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Game
gameRoute.route('/update/:id').put((req, res, next) => {
  Game.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Game successfully updated!')
    }
  })
})

// Delete Game
gameRoute.route('/delete/:id').delete((req, res, next) => {
  Game.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = gameRoute;