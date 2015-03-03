'use strict';

/**
 * @ngdoc function
 * @name srtestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the srtestApp
 */
angular.module('srtestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
