var mongoose = require('mongoose');

var Product = require('./product.model');
var Employee = require('./employee.model');

/// SETUP MONGOOSE CONNECTION ///

var _conn;

var connect = function(){

  if(_conn)
    return _conn;

  _conn = new Promise(function(resolve, reject){

    mongoose.connect(process.env.CONN || 'mongodb://localhost/nwind-filter-db', function(err){
      if(err)
        return reject(err);
      resolve(mongoose.connection);
    });
  });

  return _conn;
};

var disconnect = function(){
  if(!_conn)
    return;

  mongoose.connection.close();

};


/// EXPORT MODULE ///
module.exports = {
  connect: connect,
  disconnect: disconnect,
  models:{
    Product: Product,
    Employee: Employee
  }
};
