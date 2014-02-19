(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
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

},{"./services":4}],3:[function(require,module,exports){
'use strict';

var angular = require('angular'),
    bootstrap = require('bootstrap'),
    controllers = require('./controllers'),
    services = require('./services');

angular.module('app.main', ['app.controllers', 'app.services']);
angular.bootstrap(document, ['app.main']);

},{"./controllers":2,"./services":4}],4:[function(require,module,exports){
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

},{}]},{},[3])