var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/superhero');
mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
});
var db = mongoose.connection;


db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var characterSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  url: String,
  wins: Number,
  losses: Number
});

var Character = mongoose.model('Character', characterSchema);

var saveBattleStats = function(characters, cb) {
//  console.log(characters);

    var docs = characters.map( (character) => {
      return {id: character.id,
      name: character.name,
      url: character.image.url,
      wins: 0,
      losses: 0};
    });

    return Character.create(docs)
     .then( () => {
       console.log('saved to DB');
     })
     .catch( (err) => {
       console.log('not saved to DB');
     });

// return Character.findOne({id: characters[0].id})
//   .then( (res) => {
//     if (res === null) {
//       Character.create({id: character[0].id,
//         name: character[0].name,
//         url: character[0].image.url,
//         wins: 0,
//         losses: 0
//       })
//     }
// })
// .then( () => {
//   Character.findOne({id: characters[1].id})
//   .then( (res) => {
//     if (res === null) {
//       Character.create({id: character[1].id,
//         name: character[1].name,
//         url: character[1].image.url,
//         wins: 0,
//         losses: 0
//       })
//     }
//   })
// })



};

module.exports.saveBattleStats = saveBattleStats;

var addFightStats = (character, str) => {

  if(str === 'wins') {
    // console.log('add fight stats 1');
  return Character
  .findOneAndUpdate({id: character.id}, { $inc: {wins: 1} })
  .exec( () => {
    console.log(`Updated ${str} for ${character.name} in DB`);
  })
  .catch( (err) => {
    console.log('err on db update: ', err);
  })
  } else {
    return Character
    .findOneAndUpdate({id: character.id}, { $inc: {losses: 1} })
    .exec( () => {
      console.log(`Updated ${str} for ${character.name} in DB`);
    })
    .catch( (err) => {
      console.log('err on db update: ', err);
    })
  }
};
module.exports.addFightStats = addFightStats;

var displayTopStats = (cb) => {

  Character
  .find({})
  .sort({wins: -1})
  .limit(3)
  .exec((err, data) => {
    cb(err, data);
  })

};

module.exports.displayTopStats = displayTopStats;

var battleSchema = mongoose.Schema({
  text: String,
  advice: String,
  url: String
});

var Battle = mongoose.model('Battle', battleSchema);

var addResults = (results) =>{

    // Battle.update({
    // text: results.text,
    // advice: results.advice,
    // url: results.url}, (err, raw) => {
    //   if (err) {
    //     console.log('cannot add results');
    //   }
    // });

    var doc = {
      text: results.text,
      advice: results.advice,
      url: results.url};

    Battle.create(doc);

};

module.exports.addResults = addResults;

var displayResults = (cb) => {

  Battle
  .find({})
  .exec( (err, data) => {
    if(err) throw err;
    cb(data);
  });

};



module.exports.displayResults = displayResults;