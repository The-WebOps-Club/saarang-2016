'use strict';

/**
 * @ngdoc function
 * @name saarang2016App.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the saarang2016App
 */
angular.module('saarang2016App')
  .controller('GalleryCtrl', function ($scope) {
    $scope.pageClass = "page-gallery";
    
   
   /*$scope.carousel = [
        '../images/bottom.png',
        '../images/left page.png',
        '../images/right.png',
        ];*/
    $scope.slides = [
    {
      image: '../images/DSC_0048.jpg'
    },
    {
      image: '../images/IMG_0107.jpg'
    },
    {
      image: '../images/IMG_0034.jpg'
    },  
    {
      image: '../images/IMG_0042.jpg'
    },
    {
      image: '../images/IMG_0071.jpg'
    },
    {
      image: '../images/IMG_0093.jpg'
    },
    {
      image: '../images/DSC_0128.jpg'
    },
    {
      image: '../images/DSC_0157.jpg'
    },
    {
      image: '../images/DSC_0227.JPG'
    },
    {
      image: '../images/DSC_0358.jpg'
    },
    {
      image: '../images/DSC_0364.jpg'
    },
    {
      image: '../images/DSC_0437.jpg'
    },
    {
      image: '../images/DSC_3677.jpg'
    },
    {
      image: '../images/DSC_4315.JPG'
    },
    {
      image: '../images/DSC_0048.jpg'
    },
    {
      image: '../images/IMG_0336.jpg'
    },
    {
      image: '../images/IMG_0426.jpg'
    },
    {
      image: '../images/IMG_0518.jpg'
    },
    {
      image: '../images/IMG_3658.jpg'
    },
    {
      image: '../images/IMG_3771.jpg'
    },
    {
      image: '../images/IMG_4013.jpg'
    },
    {
      image: '../images/IMG_4018.jpg'
    },
    {
      image: '../images/IMG_4103.jpg'
    },
    {
      image: '../images/IMG_4144.jpg'
    },
    {
      image: '../images/IMG_4181.jpg'
    },
    {
      image: '../images/IMG_4192.jpg'
    },
    {
      image: '../images/IMG_4241.jpg'
    },
    {
      image: '../images/IMG_4268.jpg'
    },
    {
      image: '../images/IMG_4388.jpg'
    },
    {
      image: '../images/IMG_5076.jpg'
    },
    {
      image: '../images/IMG_5082.jpg'
    },
    {
      image: '../images/IMG_5116.jpg'
    },
    {
      image: '../images/IMG_5125.jpg'
    },
    {
      image: '../images/IMG_5235.jpg'
    },
    {
      image: '../images/IMG_5237.jpg'
    },
    {
      image: '../images/IMG_5243.jpg'
    },
    {
      image: '../images/IMG_5246.jpg'
    },
    {
      image: '../images/IMG_5326.jpg'
    },
    {
      image: '../images/IMG_5336.jpg'
    },
    {
      image: '../images/IMG_5413.jpg'
    },
    {
      image: '../images/IMG_5461-2.jpg'
    },
    {
      image: '../images/IMG_5474.jpg'
    },
    {
      image: '../images/IMG_5481.jpg'
    },
    {
      image: '../images/IMG_5545.jpg'
    },
    {
      image: '../images/IMG_6320.jpg'
    },
    {
      image: '../images/IMG_6396-2.jpg'
    },
    {
      image: '../images/IMG_6432.jpg'
    },
    {
      image: '../images/IMG_6591.jpg'
    },
    {
      image: '../images/IMG_6713.jpg'
    },
    {
      image: '../images/IMG_6749.jpg'
    },
    {
      image: '../images/IMG_6843.jpg'
    },
    {
      image: '../images/IMG_9829.jpg'
    }
  ];    




       
 /* $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://lorempixel.com/400/200/'
    },
    {
      image: 'http://lorempixel.com/400/200/food'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    }
  ];*/

  });
