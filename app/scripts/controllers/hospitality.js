angular.module('saarang2016App').controller('HospitalityCtrl', function ($scope, $modalInstance, show) {
  $scope.pageClass = "page-hospitality"
  $scope.show = show;

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});