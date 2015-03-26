(function() {
  var app = angular.module('category', ['categoryServiceModule', 'ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/create', {
        templateUrl: "assets/js/create.html",
        controller: "CreateController"
      })
      .when('/list', {
        templateUrl: "assets/js/list.html",
        controller: 'ListController'
      })
      .when('/delete', {
        templateUrl: 'assets/js/delete.html',
        controller: 'DeleteController'
      })
      .otherwise('/', {
        templateUrl: "default.html"
      });
  }]);

  app.controller('DeleteController', ['$scope',function($scope) {

  }]);
  
  app.controller('CreateController',['$scope',function($scope) {

  }]);

  app.controller('ListController', ['$scope', 'categoryService', function($scope, categoryData) {
    $scope.categoryData = categoryData;
  }]);

  app.controller('CategoryController',['$scope', 'categoryService', function($scope, categoryData) {
    $scope.categoryData = categoryData;
  }]);
})();