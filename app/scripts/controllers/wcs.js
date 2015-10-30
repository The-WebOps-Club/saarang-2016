'use strict';

/**
 * @ngdoc function
 * @name saarang2016App.controller:WcsCtrl
 * @description
 * # WcsCtrl
 * Controller of the saarang2016App
 */
angular.module('saarang2016App')
  .controller('WcsCtrl', function ($scope) {
    $scope.pageClass = "page-wcs"
    $scope.isCollapsed = false;
 $('body').animate({'background-position-x': "25%"}, 500);

    $scope.showData = function (num) {
    	$scope.artist = "Artist " + num;
    	$scope.data = "Info " + num;
    }
  });
