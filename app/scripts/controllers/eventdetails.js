'use strict';

/**
 * @ngdoc function
 * @name saarang2016App.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the saarang2016App
 */
angular.module('saarang2016App')
  .controller('EventDetails',function ($scope,$http,$rootScope,$stateParams) {
    $scope.pageClass='page-eventdetails';
    $http.get('http://erp.saarang.org/api/mobile/display_events/').then(function successCallback(response) {
    $scope.events = response.data.data;
    console.log("success");
    for (var i = 0; i < $scope.events.length-1; i++) {
      if ($scope.events[i].category==$stateParams.category) {
        $scope.selectedCategory = $scope.events[i].category;
        $scope.yo = $scope.events[i];
        console.log(i);
        break;
      }
    };
    $scope.show = function (subevent) {
      for (var i = 0; i < $scope.events.length-1; i++) {
        if ($scope.events[i].name==subevent) {
          $scope.selectedEvent = $scope.events[i];
        }
      }
    };
    console.log($stateParams.event);
    if($stateParams.event){
      $scope.show($stateParams.event);
    }
  }, function errorCallback(response) {
    console.log("No Internet Connection");
  });
});
