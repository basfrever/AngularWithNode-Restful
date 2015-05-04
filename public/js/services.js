'use strict';

/* Services */
angular.module('app.services', ['ngResource'])
.factory('VehicleDetails', function($resource) {    
    return $resource('/api/:vehicle/:entryId', {}, {
        query: {method:'GET', params:{vehicle:'@vehicle',entryId:''}, isArray:true},
        post: {method:'POST'},
        update: {method:'PUT', params: {entryId: '@entryId'}},
        remove: {method:'DELETE'}
    });    
/*  return $resource('http://localhost\\:3000/api/car');*/
});