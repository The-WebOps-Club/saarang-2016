angular.module('saarang2016App')
  .controller('FooterCtrl', function ($scope, $modal) {
  	$scope.isLoggedIn=false;
  	$scope.open = function (size, show) {

		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'views/hospitality.html',
			controller: 'HospitalityCtrl',
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