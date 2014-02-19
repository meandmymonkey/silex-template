'use strict';

var angular = require('angular'),
    resource = require('angular-resource');

module.exports = angular
    .module('app.services', ['ngResource'])
    .factory('HelloRepository', function ($resource)
    {
        return $resource('/index_dev.php/api/greetings', {}, {'query': {method: 'GET', isArray: false}});
    })
;
