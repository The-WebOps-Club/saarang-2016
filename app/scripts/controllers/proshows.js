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
 $scope.image;
 $scope.yo=false;
 $scope.class_data = false;
 $scope.choreo_data = false;
 $scope.edm_data = false;
 $scope.rock_data = false;
 $scope.popular_data = false;
 $scope.back=false;
 $scope.pro= true;
 $scope.classical= false;
 $scope.choreo= false;
 $scope.edm= false;
 $scope.rock= false;
 $scope.popular= false;
 // var info = document.getElementById('info');
// $(".container").mouseenter(function() {
//       $(this).stop();
//       $(this).css({"transform":"scale(2,1)"});
//       var that= this;
//     timer = setTimeout(function(){
//       $(that).animate({
//        width:"25%" 
//       }, 750)
//       .siblings()
//       .css({"z-index": "-5"})
//       .css({"transform":"scale(0.5,1)"})
//       .stop()
//       .animate({
//         opacity:"0.5"
//         width:"10%" 
//       }, 750);
//     }, 1000);
// });
// $('.container').mouseleave(function() {
//     clearTimeout(timer);
//       $(this).stop();
//       $(this).animate({
//        opacity:"1",
//        width:"20%" 
//       }, 750)
//       .siblings()
//       .stop()
//       .css({"z-index": "1"})
//       .animate({
//         opacity:"1",
//         width:"20%" 
//       }, 750);
// });
$scope.close = function(){
 $scope.yo=false;
};
$('.container').click(function() {
      $(this).css({"left":"42%","top":"40%","border-radius":"0"});
      $(this).animate({
       opacity: "0"
      }, 1000)
      .siblings()
      .animate({
        opacity:"0",
      }, 500);
      $("#name").css({"opacity":"0"});
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