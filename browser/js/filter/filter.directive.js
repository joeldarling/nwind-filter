app.directive('filter', function(){

  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

  return {
    templateUrl: '/js/filter/filter.html',
    scope: {
      list:'='
    },
    controller: function($scope){
      $scope.alphabet = alphabet;
      $scope.items = $scope.list.list;
      $scope.activeFilter = $scope.list.filter;

      $scope.inList = function(letter){
        return $scope.items.indexOf(letter) !== -1;
      };

    }
  };

});
