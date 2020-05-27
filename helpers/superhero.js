const axios = require('axios');
require('dotenv').config();

//send get request to API
var getCharacterbyName = (name) => {

  return axios.get(`https://superheroapi.com/api/${process.env.superheroTOKEN}/search/${name}`)
  .then( (characters) => {
      return characters[0];
  })
  .catch( (err) => {
    console.log('Cannot Fetch Character')
  });
}

module.exports.getCharacterbyName = getCharacterbyName;

var getOpponent = (character) => {

  //use randomID to get oponent and return players array for battle
  var players = [character];
  var randomId = null;
  while (randomId === null ||  randomId === character.id) {
    randomId = Math.floor(Math.random() * Math.floor(731));
  }

   return axios.get(`https://superheroapi.com/api/${process.env.superheroTOKEN}/character-${randomId}`)
  .then( (character) => {
    players.push(character);
    return players;
  })
  .catch( (err) => {
    console.log('Cannot Fetch Character')
  });

}

module.exports.getOpponent = getOpponent;

//battle function to compare power stats and determine win or loss
//store results ONLY