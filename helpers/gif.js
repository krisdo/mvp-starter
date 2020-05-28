const axios = require('axios');
require('dotenv').config();

// https://api.giphy.com/v1/gifs/search?api_key=FxAAK13ulKUdn9eBKQXgPUzwMwG0ZRN0&q=superhero dancing&limit=50&offset=0&rating=G&lang=en
const gif = () => {

  const options = {
    url: 'https://api.giphy.com/v1/gifs/search',
    parameters: {params: {
      'api_key': process.env.api_key,
      'q': 'dancing superhero',
      'limit': '15',
      'offset': '0',
      'rating': 'G',
      'lang': 'en'
    }}
  }
  return axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.api_key}&q=dancing superhero&limit=15&offset=0&rating=G&lang=en`)
  .then( (res) => {
    // console.log(res.data.data);
    var gifs = res.data.data;
    var randomGif = Math.floor(Math.random() * Math.floor(gifs.length-1));
    return gifs[randomGif].images.original.url;
  })
  .catch( (err) => {
    console.log('Failed to fetch gifs');
  })
};

module.exports = gif;