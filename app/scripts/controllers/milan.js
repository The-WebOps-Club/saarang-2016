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

    $scope.cities=[
    {
      title: 'BENGALURU',
      info: 'BENGALURU_info',
    },
    {
      title: 'MANGALURU',
      info: 'MANGALURU_info',
    },
    {
      title: 'HYDERABAD',
      info: 'HYDERABAD_info',
    },
    {
      title: 'PUNE',
      info: 'PUNE_info',
    },
    {
      title: 'DELHI',
      info: 'DELHI_info',
    },
    {
      title: 'KOCHI',
      info: 'KOCHI_info',
    },
    {
      title: 'VIZAG',
      info: 'VIZAG_info',
    },
    {
      title: 'AHMEDABAD',
      info: 'AHMEDABAD_info',
    },
    {
      title: 'COIMBATORE',
      info: 'COIMBATORE_info',
    },
    {
      title: 'MUMBAI',
      info: 'MUMBAI_info',
    },
    {
      title: 'SAARANG MILAN',
      info: 'MILAN_info',
    }
    ]

    $scope.info="";
    $scope.title="";
    $scope.initial = true;
    $scope.show = function (num) {
      $scope.selectedCity = $scope.cities[num];
      $scope.initial = false;
    }
 	});