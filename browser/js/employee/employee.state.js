app.config(function ($stateProvider) {

  $stateProvider.state('employee', {
    url: '/employee/:filter',
    templateUrl: '/js/employee/employee.html',
    resolve: {
      employeeList: function (FilterFactory, $stateParams) {
        if(!$stateParams.filter)
          return;
        return FilterFactory.fetchFiltered('Employee',$stateParams.filter);
      },
      alphaList: function (FilterFactory) {
        return FilterFactory.fetchAll('Employee');
      }
    },
    controller: function($scope, $stateParams, employeeList, alphaList){
      $scope.employeeList = employeeList;
      $scope.alphaList = alphaList;
      $scope.activeFilter = $stateParams.filter;

    }
  });

});
