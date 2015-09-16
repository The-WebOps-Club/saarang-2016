'use strict';

/**
 * @ngdoc function
 * @name saarang2016App.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the saarang2016App
 */
angular.module('saarang2016App')
  .controller('GalleryCtrl', function ($scope) {
    $scope.pageClass = "page-gallery";
    
   
    $scope.carousel = [
        '/images/bottom.png',
        '/images/left page.png',
        '/images/right.png',
        ];
  });
