const advice = require('./advice.js');
const gif = require('./gif.js');

var fight = (players) => {

  var user = players[0];
  var computer = players[1];

  //array
  var userStats = (user.powerstats.combat + user.powerstats.durability
    + user.powerstats.intelligence + user.powerstats.power
    + user.powerstats.speed + user.powerstats.strength);

  var computerStats = (computer.powerstats.combat + computer.powerstats.durability
    + computer.powerstats.intelligence + computer.powerstats.power
    + computer.powerstats.speed + computer.powerstats.strength);


  if(userStats > userStats) {
    //api request to giphy
   //You WON!
    var string = gif();
    var text = 'You WON!';
  } else {
    var string = advice();
    var text = 'You LOST!';
  }

  // return advice();

};

module.exports = fight;