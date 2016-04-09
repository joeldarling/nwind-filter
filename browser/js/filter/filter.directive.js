app.directive('filter', function(){

  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

  return {
    templateUrl: '/js/filter/filter.html',
    scope: {
      list:'=',
      curr:'='
    },
    controller: function($scope, $state){
      $scope.alphabet = alphabet;
      $scope.inList = function(letter){
        return $scope.list.indexOf(letter) !== -1;
      };
    }
  };

});
