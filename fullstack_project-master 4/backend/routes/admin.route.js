const express = require('express');
const app = express();
const adminRoute = express.Router();

// Players model
const Admin = require('../models/admin');

// Add Players
adminRoute.route('/add').post((req, res, next) => {
  Admin.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all Admin
adminRoute.route('/all').get((req, res) => {
  Players.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single admin by ID
adminRoute.route('/:id').get((req, res) => {
  Players.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Delete admin
adminRoute.route('/delete/:id').delete((req, res, next) => {
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

module.exports = adminRoute;