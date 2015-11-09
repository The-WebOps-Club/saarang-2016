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
 $('body').animate({'background-position-x': "75%"}, 500);
 var timer;
$(".box").mouseenter(function() {
      // $(this).stop();
      var that= this;
    timer = setTimeout(function(){
      $(that).animate({
       width:"30%" 
      }, 750)
      .siblings()
      .css({"z-index": "-5"})
      .stop()
      .animate({
        opacity:"0.5",
        width:"0%" 
      }, 750);
    }, 1000);
});
$('.box').mouseleave(function() {
    clearTimeout(timer);
      $(this).stop();
      $(this).animate({
       opacity:"1",
       width:"20%" 
      }, 750)
      .siblings()
      .stop()
      .css({"z-index": "1"})
      .animate({
        opacity:"1",
        width:"20%" 
      }, 750);
});
$('.box').click(function() {
      $(this).stop();  
      $(this).animate({
       width:"100%", 
       opacity: "0"
      }, 1000)
      .siblings()
      .animate({
        opacity:"0",
      }, 750);
      $(this).animate({
       opacity: "2",
       width:"20%"
      }, 10);

});
	$scope.open = function (size, show) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'proshowsDetails.html',
      controller: 'ProshowDetailsCtrl',
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
    });
  };

  });


angular.module('saarang2016App').controller('ProshowDetailsCtrl', function ($scope, $modalInstance, show) {
  $scope.pageClass = "page-proshows-details"
  $scope.show = show;

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});