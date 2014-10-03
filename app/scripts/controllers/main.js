'use strict';

/**
 * @ngdoc function
 * @name uhohApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uhohApp
 */
angular.module('uhohApp')
  .controller('MainCtrl', function ($scope) {
    $scope.form = {
      campus: '',
      room: '',
      name: '',
      contact: '',
      question: ''
    };
  });
