(function() {
  var app = angular.module('categoryServiceModule', []);
  app.factory('categoryService',['$location', '$http', function($location, $http) {
    var myServiceInstance = {};
    var categoriesUrl = '/categories.json'
    myServiceInstance.cats = []; 

    $http({
      method: 'get',
      url:  categoriesUrl,           
      headers: { 'Content-Type': 'application/json' }
      }).success(function(data) {
        console.log(data);
        myServiceInstance.cats = data;
      });
    
    return myServiceInstance;
  }]);
})();