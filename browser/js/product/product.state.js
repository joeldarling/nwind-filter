app.config(function ($stateProvider) {

  $stateProvider.state('products', {
    url: '/products',
    template: '<filter list="{list:alphaList}"></filter>',
    resolve: {
      alphaList: function (FilterFactory) {
        return FilterFactory.fetchAll('Product');
      }
    },
    controller: function($scope, alphaList){
      $scope.alphaList = alphaList;

    }
  });

  $stateProvider.state('product', {
    url: '/product/:filter',
    templateUrl: '/js/product/product.html',
    resolve: {
      productList: function (FilterFactory, $stateParams) {
        return FilterFactory.fetchFiltered('Product',$stateParams.filter);
      },
      alphaList: function (FilterFactory) {
        return FilterFactory.fetchAll('Product');
      }
    },
    controller: function($scope, $stateParams, productList, alphaList){
      $scope.productList = productList;
      $scope.alphaList = alphaList;
      $scope.activeFilter = $stateParams.filter;

    }
  });

});
