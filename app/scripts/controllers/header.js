angular.module('saarang2016App')
  .controller('HeaderCtrl', function ($scope,$http) {
  	$scope.isLoggedIn=false;
  	 $http.get('http://erp.saarang.org/api/mobile/display_events/').then(function successCallback(response) {
    $scope.displayEvents = response.data.data;
    	console.log($scope.displayEvents);
  }, function errorCallback(response) {
    console.log("No Internet Connection");
  });
});