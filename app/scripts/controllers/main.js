'use strict';

/**
 * @ngdoc function
 * @name saarang2016App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the saarang2016App
 */
angular.module('saarang2016App')
  .controller('MainCtrl', function($scope)
    {
    var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
    $scope.pageClass = "page-home"

    });
