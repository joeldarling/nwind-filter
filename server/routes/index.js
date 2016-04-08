var router = require('express').Router();

router.get('/', function( req, res, next ){
  res.send('poop');
});

module.exports = router;
