'use strict';

/**
 * @ngdoc function
 * @name saarang2016App.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the saarang2016App
 */
angular.module('saarang2016App')
  .controller('EventDetails', function ($scope) {
  	$scope.pageClass='page-eventdetails';
  	$scope.events=[
  	{
  		name: 'solo_dance',
  		title: 'SOLO_DANCE',
  		info: 'solo_dance_info',
  	},
  	{
  		name: 'group_dance',
  		title: 'GROUP DANCE',
  		info: 'group_dance_info',
  	},
  	{
  		name: 'vocal',
  		title: 'VOCAL',
  		info: 'vocal_info',
  	},
  	{
  		name: 'instrumental',
  		title: 'INSTRUMENTAL',
  		info: 'instrumental_info',
  	},
  	]

  	$scope.info="";
  	$scope.title="";

  	$scope.show = function (num) {
  		$scope.selectedEvent = $scope.events[num];
  	}
  });
