app.config(function ($stateProvider) {

  $stateProvider.state('products', {
    url: '/Product',
    // template: '<filter filter="alphabet"></filter>',
    template:'<p>hello</p>',
    resolve: {
      productList: function (FilterFactory) {
        return FitlerFactory.fetchAll('Product');
      }
    },
    controller: function(){
      console.log('hello');
    }
  });
});
