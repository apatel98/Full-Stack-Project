const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const playersRoute = require('./routes/players.route');
const gamesRoute = require('./routes/game.route');
const adminRoute = require('./routes/admin.route');
const createError = require('http-errors');
const dbConfig = require('./database/db')
require('dotenv').config();


  

// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
    console.log('Database connected sucessfully ')
  },
  error => {
    console.log('Could not connected to database : ' + error)
  }
)

// Set up express js port
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/players',playersRoute);
app.use('/game', gamesRoute);
app.use('/admin', adminRoute); 
app.get('/',(req,res) => {
  res.send("Invalid endpoint");
})
app.get("/api/player", function(req, res) {
});
// Create port
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
// app.use((req, res, next) => {
//   next(createError(404,"Not Found!!!!"));
// });

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message );
  console.error(err.stack );
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
})