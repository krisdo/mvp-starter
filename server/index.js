var express = require('express');
var bodyParser = require('body-parser');
// var cors = require('cors');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var db = require('../database-mongo');
var superhero = require('../helpers/superhero.js');
var battle = require('../helpers/battle.js');
var gif = require('../helpers/gif.js');
var advice = require('../helpers/advice.js');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// app.use(cors());

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
app.post('/characters', (req, res) => {
  var players = [];
  var name = req.body.name;
  superhero.getCharacterbyName(name)
  .then( (character1) => {
    // console.log('trying to get opp', character);
    players.push(character1);
    return superhero.getOpponent(character1);
  })
  .then( (character2) => {
    players.push(character2);
    return players;
  })
  .then((players) =>{
    console.log(players);
    res.json(players);
  })
  .catch((err) => {
    console.log('err on server');
  });


});

//update the leaderboard
app.get('/characters')

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

