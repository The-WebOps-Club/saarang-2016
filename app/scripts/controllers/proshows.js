'use strict';

/**
 * @ngdoc function
 * @name saarang2016App.controller:ProshowsCtrl
 * @description
 * # ProshowsCtrl
 * Controller of the saarang2016App
 */
angular.module('saarang2016App')
  .controller('ProshowsCtrl', function ($scope, $modal) {
    $scope.pageClass="page-proshows";
    $scope.animationsEnabled = true;
    $scope.items = ['item1', 'item2', 'item3'];

	$scope.open = function (size, show) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'proshowsDetails.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        show: function () {
          return show;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  });


angular.module('saarang2016App').controller('ModalInstanceCtrl', function ($scope, $modalInstance, show) {
  $scope.pageClass = "page-proshows-details"
  $scope.show = show;

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});