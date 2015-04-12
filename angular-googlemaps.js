/**
 * Created by Antonio on 12/04/15.
 */
angular.module('angular-googlemaps', [])
    .factory('addressFromCoordinates', function($http, $q) {
        'use strict';
        var addressFromCoordinates = function(latlng) {
            var deferred = $q.defer();
            $http({
                url: 'http://maps.googleapis.com/maps/api/geocode/json',
                params: {
                    sensor: 'true_or_false',
                    latlng: latlng
                },
                method: 'GET',
                headers: angular.extend({
                    'X-Requested-With': undefined
                })
            }).
                success(function(data){
                    deferred.resolve(data);
                });
            return deferred.promise;
        };
        return addressFromCoordinates;
    })
