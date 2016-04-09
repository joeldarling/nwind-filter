var router = require('express').Router();

var mongoose = require('mongoose');

var validDb = ['Product', 'Employee'];

router.get('/:db', function( req, res, next ){

  if(!isValidDb(req.params.db)){
    res.sendStatus(404);
    return;
  }

  mongoose.model(req.params.db).find({})
  .then(function(result){
    res.send(getAlphaList(result));
  });
});

router.get('/:db/:filter', function( req, res, next ){


  if(!isLetter(req.params.filter) || req.params.filter.length!==1 || !isValidDb(req.params.db)){

    res.sendStatus(404);
    return;
  }
  mongoose.model(req.params.db).find({})
  .then(function(result){
    res.send(filterList(result, req.params.filter));
  });
});

var getAlphaList = function(list){
  var result = [];

  list.forEach(function(item){
    var letter = item.name.toUpperCase()[0];

    if(result.indexOf(letter) === -1)
      result.push(letter);
  });

  return result.sort();
};

var filterList = function(list, filter){

  var result = [];

  filter = filter.toUpperCase();
  list.forEach(function(item){
    var letter = item.name.toUpperCase()[0];

    if(letter === filter)
      result.push(item);
  });

  return result;
};

var isLetter = function(letter){
  return 'ABCDEFGHIJKLMNOPQRTSUVWXYZ'.indexOf(letter.toUpperCase()) !== -1;

};

var isValidDb = function (db){
  return validDb.indexOf(db) !== -1;
};

module.exports = router;
