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
      .when('/addtruck', {
      templateUrl: 'partials/addTruck',
      controller: 'truckCtrl'
  })
      .when('/addcar', {
      templateUrl: 'partials/addCar',
      controller: 'carCtrl'
  }) .otherwise({
      redirectTo:'/'
  });
}).controller('carCtrl', function($scope,VehicleDetails,$location){
    $scope.carData=function(){
        
    VehicleDetails.query({vehicle:'car'}, function(response){
        $scope.carsData = response;
    });
    };
    $scope.carData();  
    $scope.add=function(){        
        VehicleDetails.post({vehicle:'car','name':$scope.name,'model':$scope.model,'company':$scope.company,'yearofmanufacturing':$scope.yom}, function(response){
            $scope.ss = response;
            if($scope.ss){
            $location.path('#/');
            }
        });
    };
    
    $scope.edit=function(id){        
    VehicleDetails.get({vehicle:'car',entryId:id}, function(response){
        $scope.card = response;
    });
    };
    
    $scope.update=function(uid){     VehicleDetails.update({vehicle:'car','name':$scope.card.name,'model':$scope.card.model,'company':$scope.card.company,'yearofmanufacturing':$scope.card.yearofmanufacturing,entryId:uid}, function(response){
            $location.path('#/');
        });  
        $scope.carData();
        $scope.card='';
    };
    
        $scope.delete=function(id){        
    VehicleDetails.remove({vehicle:'car',entryId:id}, function(response){
       $location.path('#/');
       $scope.carData();    
    });
    };


}).controller('truckCtrl', function($scope,VehicleDetails,$location){
    $scope.truckData=function(){
            VehicleDetails.query({vehicle:'truck'}, function(response){
        $scope.truckData = response;
    });    
    };
    $scope.truckData();
    
    $scope.add=function(){        
        VehicleDetails.post({vehicle:'truck','name':$scope.name,'model':$scope.model,'company':$scope.company,'weightcapacity':$scope.yom}, function(response){
            $scope.ss = response;
            if($scope.ss){
            $location.path('#/');
            }
        });
    };
    
    $scope.edit=function(id){        
    VehicleDetails.get({vehicle:'truck',entryId:id}, function(response){
        $scope.truckd = response;
    });
    };
    
    $scope.update=function(uid){     VehicleDetails.update({vehicle:'truck','name':$scope.truckd.name,'model':$scope.truckd.model,'company':$scope.truckd.company,'weightcapacity':$scope.truckd.weightcapacity,entryId:uid}, function(response){
            $location.path('#/');
            $scope.truckData();
            $scope.truckd='';
        });    
    };
    
        $scope.delete=function(id){        
    VehicleDetails.remove({vehicle:'truck',entryId:id}, function(response){
       $location.path('#/');
        $scope.truckData();
    });
    };

});