const advice = require('./advice.js');
const gif = require('./gif.js');
const battleDB = require('../database-mongo/index.js');

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

  if(userStats > computerStats) {

    return battleDB.addFightStats(user, 'wins')
    .then( () => {

       battleDB.addFightStats(computer, 'losses');
    })
    .then( () => {
      gif()
      .then( (url) =>{
        results.url = url;
        results.advice = null;
        results.text = 'You WON!';
        console.log(url);
        return results;
      })
      .then( (results) =>{
        battleDB.addResults(results);
      })
      .catch( (err) => {
        console.log('gif url err');
      })
    })
    .catch( (err) => {
      console.log('gif battle err')
    })

  } else {

    return battleDB.addFightStats(user, 'losses')
    .then( () => {
       battleDB.addFightStats(computer, 'wins');
    })
    .then( () => {
      advice()
      .then((str) => {
        results.url = null;
        results.advice = `A piece of advice for you: "${str}"`;
        results.text = 'You LOST!';
        console.log(str);
        return results;
      })
      .then( (results) =>{
        battleDB.addResults(results);
      })
      .catch( (err) => {
        console.log('advice str err')
      })
    })
    .catch((err) => {
      console.log('advice batte err')
    })
  }

};

module.exports = fight;