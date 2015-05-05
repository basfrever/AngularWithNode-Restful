'use strict';

/* Services */
angular.module('app.services', ['ngResource'])
.factory('VehicleDetails', function($resource) {    
    return $resource('/api/:vehicle/:entryId', {}, {
        query: {method:'GET', params:{vehicle:'@vehicle',entryId:''}, isArray:true},
        post: {method:'POST',params: {vehicle: '@vehicle'}},
        update: {method:'PUT', params: {vehicle: '@vehicle',entryId: '@entryId'}},
        remove: {method:'DELETE',params: {vehicle: '@vehicle',entryId: '@entryId'}}
    }
    );    
/*  return $resource('http://localhost\\:3000/api/car');*/
});