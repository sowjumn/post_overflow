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

  app.controller('CreateController',['$scope', 'categoryService', '$http', function($scope, categoryData, $http) {
    $scope.categoryName = '';
    $scope.categoryData = categoryData;

    $scope.addCategoryName = function(categoryName) {
      console.log(categoryName);
      $http({
      method: 'POST',
      url:  '/categories', 
      data: {
        name: categoryName
      },
      headers: { 'Content-Type': 'application/json' }
      }).success(function(data) {
        // $scope.categoryData.cats.push(data);
        $http({
        method: 'get',
        url:  '/categories.json',           
        headers: { 'Content-Type': 'application/json' }
        }).success(function(data) {
          console.log(data);
          $scope.categoryData.cats = []
          $scope.categoryData.cats = data;
        });
      });
    }
  }]);

  app.controller('ListController', ['$scope', 'categoryService', function($scope, categoryData) {
    $scope.categoryData = categoryData;
  }]);

  app.controller('CategoryController',['$scope', 'categoryService', function($scope, categoryData) {
    $scope.categoryData = categoryData;
  }]);
})();