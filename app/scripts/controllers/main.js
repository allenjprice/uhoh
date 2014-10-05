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
    $scope.campuses = ['Benton', 'Cabot', 'Little Rock'];
    $scope.LRrooms = ['Worship Center', 'Warehouse', 'Chapel', 'FSM Auditorium', 'FSM Garage', '56 Arena', 'Living Room', 'FSM Green Room', 'Green Room', 'The Station', 'Teaching Pastor\'s Conference Room', 'Upstairs Conference Room', 'FSK Riptide', 'Grandma\'s Garden', 'Paradise Pond', 'Mission Earth', 'HMS Gospel', 'In Search of the Secret Door', 'Knights of the Cross', 'PreSchool Worship'];
    $scope.BNrooms = ['Worship Center', 'Adult Classroom', 'FSK Worship Room', 'The Barn'];
    $scope.CBrooms = ['Worship Center', '56 Garage', 'FSK 1st/2nd Grade Room', 'FSK 3rd/4th Grade Room'];

    $scope.form = {
      campus: '',
      room: '',
      name: '',
      contact: '',
      question: ''
    };
  });
