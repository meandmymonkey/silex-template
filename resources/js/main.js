'use strict';

var angular = require('angular'),
    bootstrap = require('bootstrap'),
    controllers = require('./controllers'),
    services = require('./services');

angular.module('app.main', ['app.controllers', 'app.services']);
angular.bootstrap(document, ['app.main']);
