var app = angular.module('nwind_filter', ['ui.router']);


app.config(function ($urlRouterProvider, $locationProvider) {
  
	$urlRouterProvider.otherwise('/');

});

app.run(function ($rootScope) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    console.error('Error transitioning from "' + fromState.name + '" to "' + toState.name + '":', error);
  });
});
