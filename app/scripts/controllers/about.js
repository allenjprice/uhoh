'use strict';

/**
 * @ngdoc function
 * @name uhohApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the uhohApp
 */
angular.module('uhohApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
