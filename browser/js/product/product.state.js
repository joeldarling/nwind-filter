app.config(function ($stateProvider) {

  // $stateProvider.state('products', {
  //   url: '/products',
  //   templateUrl: '/js/product/product.html',
  //   resolve: {
  //     alphaList: function (FilterFactory) {
  //       return FilterFactory.fetchAll('Product');
  //     }
  //   },
  //   controller: function($scope, alphaList){
  //     $scope.alphaList = alphaList;
  //     $scope.activeFilter = {};
  //     $scope.productList = [];
  //
  //   }
  // });

  $stateProvider.state('product', {
    url: '/product/:filter',
    templateUrl: '/js/product/product.html',
    resolve: {
      productList: function (FilterFactory, $stateParams) {
        if(!$stateParams.filter)
          return;
        return FilterFactory.fetchFiltered('Product',$stateParams.filter);
      },
      alphaList: function (FilterFactory) {
        return FilterFactory.fetchAll('Product');
      }
    },
    controller: function($scope, $state, $stateParams, productList, alphaList){
      $scope.productList = productList;
      $scope.alphaList = alphaList;
      $scope.activeFilter = $stateParams.filter;

    }
  });

});
