var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/superhero');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var battleStatsForCharacterSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  url: String,
  wins: Number,
  losses: Number
});

var battleStatsForCharacter = mongoose.model('battleStatsForCharacter', battleStatsForCharacterSchema);

var saveBattleStats = function(characters) {
//  console.log(characters);
  characters.forEach( (character) => {
    battleStatsForCharacter
    .create({
      id: character.id,
      name: character.name,
      url: character.url
    })
    .then( ()=>{
      console.log('Saved Character to DB');
    })
    .catch( (err) => {
      console.log(err);
    })
  })

};

module.exports.saveBattleStats = saveBattleStats;

var displayTopStats = () => {

};

module.exports.displayTopStats = displayTopStats;

var battleSchema = mongoose.Schema({
  name: String,
  results: String,
  advice: String,
  url: String
});

var Battle = mongoose.model('Battle', battleSchema);

var addResults = (Results) =>{

};

module.exports.addResults = addResults;

var displayResults = (name) => {


};



module.exports.displayResults = displayResults;