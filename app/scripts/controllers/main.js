'use strict';

var currentTime = new Date()
	var hours = currentTime.getHours()
	var minutes = currentTime.getMinutes()

/**
 * @ngdoc function
 * @name saarang2016App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the saarang2016App
 */
angular.module('saarang2016App')
  .controller('MainCtrl', function($scope)
    {


    $scope.chsun=false;
       $scope.chmoon=false;
       console.log(hours);
       var a = document.getElementById('sun')
        var b = document.getElementById('moon')
            
       if(hours>=6&&hours<=12)
        {
            $scope.chsun=true;
            console.log(a)
            a.style.left = (hours-6) * 7.6 + "%"
            console.log(a.style)
            a.style.top = 36-(hours-6) * 6 + "%"
        }    
        if(hours>=12&&hours<18)
        {
            $scope.chsun=true;
            a.style.top =(hours-12) * 6 + "%"
            a.style.left = (hours-6) * 7.6 + "%"                 
        }


        if(hours<24&&hours>=18)
        {
            b.style.left = (hours-18) * 7.6 + "%"
            console.log(b.style)
            b.style.top = 33-(hours-18) * 6 + "%"
            $scope.chmoon=true;
        }
        else if(hours>=0&&hours<6)
        {
            b.style.left = (hours+7) * 7.6 + "%"
            console.log(b.style)
            b.style.top = hours * 6 + "%"
            $scope.chmoon=true;
        }
    });
