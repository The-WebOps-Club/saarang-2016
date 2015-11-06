'use strict';

/**
 * @ngdoc function
 * @name saarang2016App.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the saarang2016App
 */
angular.module('saarang2016App')
  .controller('EventsCtrl', function ($scope,$rootScope) {
  	$scope.pageClass = 'page-events';
 //  	document.getElementById('audio').onmouseover=function(){
	// document.getElementById('welcomeSound').play();
	// };
 	$('body').animate({'background-position-x': "0%"}, 500);

  });
