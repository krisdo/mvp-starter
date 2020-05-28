const axios = require('axios');
require('dotenv').config();

//send get request to API
var getCharacterbyName = (name) => {

  var options = {
    url: `https://superheroapi.com/api/${process.env.superheroTOKEN}/search/${name}`,
  };

  return axios.get(options.url)
  .then( (characters) => {
    var userCharacter = characters.data.results[0];
    // console.log(userCharacter);
    return userCharacter;
  })
  .catch( (err) => {
    console.log('Cannot Fetch Character for user')
  });
}

module.exports.getCharacterbyName = getCharacterbyName;

var getOpponent = (character) => {


  //use randomID to get opponent and return players array for battle
  var randomId = null;

  while (randomId === null ||  randomId === Number(character.id)) {
    randomId = Math.floor(Math.random() * Math.floor(731));
  }

   return axios.get(`https://superheroapi.com/api/${process.env.superheroTOKEN}/${randomId}`)
  .then( (character) => {
    // console.log('computer: ', character.data);
    var computerCharacter = character.data;
    // players.push(computerCharacter);

    return computerCharacter;
  })
  .catch( (err) => {
    console.log('Cannot Fetch Character for computer')
  });

}

module.exports.getOpponent = getOpponent;

//battle function to compare power stats and determine win or loss
//store results ONLY