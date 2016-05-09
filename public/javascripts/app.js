angular.module('pirates', ['ngRoute']);

angular.module('pirates').config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/pirates.html'
      })
      // .when('/shoppingCart', {
      // 	templateUrl: 'partials/shoppingCart.html'
      // })
    $locationProvider.html5Mode(true);
});
