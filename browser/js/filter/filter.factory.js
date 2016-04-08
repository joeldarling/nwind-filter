app.factory('FilterFactory', function($http, $log){

  return {

    fetchAll: function(db){
      return $http.get('/api/' + db)
      .then(function(res){
        return res.data;
      })
      .catch($log.error);
    },

    fetchFiltered: function(db, filter){
      return $http.get('/api/' + db + '/' + filter)
      .then(function(res){
        return res.data;
      })
      .catch($log.error);
    }

  };
});
