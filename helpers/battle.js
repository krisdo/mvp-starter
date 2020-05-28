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

  var results = {};

  if(userStats > userStats) {
    return gif()
    .then( (url) =>{

      results.string = url;
      results.text = 'You WON!';
      // console.log(results);
      return results;
    })
    .catch( (err) => {
      console.log('gif battle err')
    })

  } else {
    return advice().
    then((str) => {

      results.string = str;
      results.text = 'You LOST!';
      // console.log(results);
      return results;
    })
    .catch( (err) => {
      console.log('advice battle err')
    })
  }

};

module.exports = fight;