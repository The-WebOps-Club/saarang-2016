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
		$('body').animate({'background-position-x': "50%"}, 500);
	    $scope.pageClass = "page-home";
	    function click(){
		document.getElementById('click').play();
		};
    });
