const axios = require('axios');
require('dotenv').config();

var getRandomAdvice = () => {

  return axios.get('https://api.adviceslip.com/advice/search/do')
  .then( (data) => {
    var advices = data.data.slips;
    var randomAdvice = Math.floor(Math.random() * Math.floor(advices.length-1));

    //returns a string advice
    return advices[randomAdvice].advice;
  })
  .catch( (data) => {
    console.log('Cannot Fetch Advice');
  })

};

module.exports = getRandomAdvice;