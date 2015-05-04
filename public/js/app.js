'use strict';
angular.module('app',['app.services']).config(function($locationProvider,$routeProvider) {
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
}).controller('carCtrl', function($scope,VehicleDetails){
    
    VehicleDetails.query({vehicle:'car'}, function(response){
        $scope.carsData = response[0];
    });

}).controller('truckCtrl', function($scope,VehicleDetails){
    VehicleDetails.query({vehicle:'truck'}, function(response){
        $scope.truckData = response[0];
    });

});