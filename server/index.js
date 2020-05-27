var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

//send battle results winning or losing text to client
app.get('/results', (req, res) => {
  console.log('server results')

  //gets data from results schema of mongodb
});

//gets characters for both users and computer from hero api
//does the fight (behind the scenes battle results stored elsewhere)
  //update battle stats and results in mongodb
//send user character and computer character back to client
app.post('/players', (req, res) => {

});

//update the leaderboard
app.get('/players')

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

