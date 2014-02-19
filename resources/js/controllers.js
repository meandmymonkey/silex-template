'use strict';

var angular = require('angular'),
    services = require('./services');

module.exports = angular
    .module('app.controllers', ['app.services'])
    .controller('HelloCtrl', ['$scope', 'HelloRepository', function ($scope, HelloRepository)
    {
        var data = HelloRepository.query();

        data.$promise.then(function ()
        {
            $scope.loaded = true;
            $scope.data = data;
        });
    }])
;
