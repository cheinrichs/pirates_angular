angular.module('pirates')
  .controller('PiratesController', ['$scope', function($scope){
    console.log("pirates controller connected");
    $scope.view = {};
  }]);
