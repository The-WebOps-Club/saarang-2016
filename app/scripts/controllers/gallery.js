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
    var arr = new Array(50);
    for (var i = 50 - 1; i >= 0; i--) {
      arr[i] = i+1;
    };
    $scope.arr = arr;
  });
