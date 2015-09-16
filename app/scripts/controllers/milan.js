'use strict';

angular.module('saarang2016App')
  .controller('MilanCtrl', function ($scope, $http) {
    $scope.chform=false;
    $scope.pageClass="page-milan";
 		var form=document.getElementById("myform");
 		$scope.band = {
 			members: [
 				{
					name: '',
					email: '',
					phoneNumber: ''
 				}
 			],
 		}
    $scope.showfields=function() {
    	console.log($scope.chform);
    	$scope.chform=true;
      	console.log($scope.chform);
    }
    $scope.deleteMember = function(i) {
      $scope.band.members.splice(i, 1);
    }
    $scope.addMember = function() {
      $scope.band.members.push({
          name: '',
          email: '',
          phoneNumber: ''
        })
    }
    $scope.submit = function() {
      $http.post('http://erptest.saarang.org/api/milan/', $scope.band)
        .success(function(data){
          alert("Submitted Successfully!");
        })
    }
 	});