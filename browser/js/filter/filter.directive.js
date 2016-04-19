app.directive('filter', function(){

  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

  return {
    templateUrl: '/js/filter/filter.html',
    scope: {
      list:'=',
      curr:'='
    },//possibly passing in a map of 'active' letters would be easier
    controller: function($scope, $state){
      $scope.alphabet = alphabet;
      $scope.inList = function(letter){
        return $scope.list.indexOf(letter) !== -1;
      };
    }
  };

});
