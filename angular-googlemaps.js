/**
 * Created by Antonio on 12/04/15.
 */
angular.module('angular-googlemaps', [])
    .factory('addressFromCoordinates', function ($http, $q) {
        'use strict';
        var addressFromCoordinates = function (latlng) {
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
                success(function (data) {
                    deferred.resolve(data);
                });
            return deferred.promise;
        };
        return addressFromCoordinates;
    })
    .factory('coordinatesFromAddress', function ($http, $q) {
        'use strict';
        var coordinatesFromAddress = function (address, section) {
            var deferred = $q.defer();
            $http({
                url: 'http://maps.googleapis.com/maps/api/geocode/json',
                params: {
                    address: address,
                    components: 'country:ES'
                },
                method: 'GET',
                //data: data,
                headers: angular.extend({
                    'X-Requested-With': undefined
                })
            }).
                success(function (data) {
                    deferred.resolve({
                        coordinates: data.results[0].geometry.location.lat + ',' + data.results[0].geometry.location.lng,
                        section: section
                    });
                });
            return deferred.promise;
        };
        return coordinatesFromAddress;
    })
