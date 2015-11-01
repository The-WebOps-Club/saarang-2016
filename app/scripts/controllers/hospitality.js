angular.module('saarang2016App').controller('HospitalityCtrl', function ($scope) {
  $scope.pageClass = "page-hospitality"
  $scope.activate = function (num) {
  	$('.active').removeClass('active');
  	$('.ht-'+num).addClass('active');
  }
});