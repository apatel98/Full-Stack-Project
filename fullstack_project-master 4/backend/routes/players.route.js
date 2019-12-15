const express = require('express');
const app = express();
const playersRoute = express.Router();

// Players model
const Players = require('../models/players');

// Add Players
playersRoute.route('/add').post((req, res, next) => {
  // Players.create(req.body, (error, data) => {
  //   if (error) {
  //     return next(error)
  //   } else {
  //     res.json(data)
  //   }
  // })
  let newPlayer = new Players({
    playername: req.body.playername,
    status: req.body.status,
    rank: req.body.rank,
    favouritegame: req.body.favouritegame,
    score: req.body.score,
    time: req.body.time
  });
  console.log(req.body.playername);
  Players.addPlayer(newPlayer, (err, Players) =>{
    if(err){
      res.json({success: false , msg:"failed to add player"})
    }else{
      res.json({success: true , msg:"player registered"})
    }
  })
});

// Get all Players
playersRoute.route('/all').get((req, res) => {
  Players.getAllPlayers((error, lists) => {
    if (error) {
      res.json({success:false, message: `Failed to load all lists. Error: ${err}`});
      return next(error)
    } else {
      
      // res.write(JSON.stringify({success: true, lists:lists},null,2));
      // res.end();
      res.json(lists);
      console.log("ALL Players")  
    }
  })
})

// Get single Players
playersRoute.route('/read-player/:id').get((req, res) => {
  Players.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update players
playersRoute.route('/update/:id').put((req, res, next) => {
  Players.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Players successfully updated!')
    }
  })
})

// Delete players
playersRoute.route('/delete/:id').delete((req, res, next) => {
  Players.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = playersRoute;