'use strict';

/**
 * @ngdoc function
 * @name saarang2016App.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the saarang2016App
 */
angular.module('saarang2016App')
  .controller('EventsCtrl', function ($scope) {
  	$scope.pageClass = 'page-events';
 	$('body').animate({'background-position-x': "0%"}, 500);

  });
