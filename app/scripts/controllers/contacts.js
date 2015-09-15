'use strict';

/**
 * @ngdoc function
 * @name saarang2016App.controller:ContactsCtrl
 * @description
 * # ContactsCtrl
 * Controller of the saarang2016App
 */
angular.module('saarang2016App')
  .controller('ContactsCtrl', function ($scope) {
   $scope.pageClass = "page-contact"
   $scope.now=false;
   $scope.secs=false;
   $scope.spons=false;
   $scope.events=false;
   $scope.shows=false;
   $scope.sales=false;
   $scope.pub=false;
   $scope.hosp=false;
   $scope.webops=false;
   $scope.design=false;
   $scope.fin=false;
   $scope.fac=false;
   $scope.qms=false;
   $scope.saf=false;
  });
