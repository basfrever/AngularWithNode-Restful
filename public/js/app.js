'use strict';
var app = angular.module('app',[]);
app.config(function($locationProvider, $routeProvider) {
  // $locationProvider.html5Mode(true);
  $routeProvider
      .when('/',{ 
        templateUrl: 'partials/index',
        controller: 'carCtrl'
    })
      .when('/truck', {
      templateUrl: 'partials/truck',
      controller: 'truckCtrl'
  })
    .otherwise({
      redirectTo:'/'
  });
});
 
app.controller('carCtrl', function($scope,$http){
    $http.get('/api/car').success(function(data) {
      $scope.carsData = data[0];
    }); 
    
});

app.controller('truckCtrl', function($scope,$http){
    $http.get('/api/truck').success(function(data) {
      $scope.truckData = data[0];
    });    
});