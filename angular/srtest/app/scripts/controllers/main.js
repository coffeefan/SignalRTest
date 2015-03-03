'use strict';

/**
 * @ngdoc function
 * @name srtestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the srtestApp
 */
angular.module('srtestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
