app.directive('filter', function(){

  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

  return {
    templateUrl: '/js/filter/filter.html',
    controller: function($scope){
      $scope.alphabet = alphabet;
    }
  };

});
