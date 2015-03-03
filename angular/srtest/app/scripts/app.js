'use strict';

/**
 * @ngdoc overview
 * @name srtestApp
 * @description
 * # srtestApp
 *
 * Main module of the application.
 */
angular
  .module('srtestApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/signalr', {
            templateUrl: 'views/signalr.html',
            controller: 'SignalRAngularCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  })
    ;
