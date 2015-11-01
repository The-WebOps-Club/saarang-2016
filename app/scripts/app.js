'use strict';

/**
 * @ngdoc overview
 * @name saarang2016App
 * @description
 * # saarang2016App
 *
 * Main module of the application.
 */
angular
  .module('saarang2016App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'angular-carousel',
    'ui.bootstrap'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        url:'/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('about', {
        url:'/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('gallery', {
        url:'/gallery',
        templateUrl: 'views/gallery.html',
         controller: 'GalleryCtrl',
         controllerAs: 'gallery'
      })
      .state('sponsors', {
        url:'/sponsors',
        templateUrl: 'views/sponsors.html',
        controller: 'SponsorsCtrl',
        controllerAs: 'sponsors'
      })
      .state('contacts', {
        url:'/contacts',
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contacts'
      })
      .state('milan', {
        url:'/milan',
        templateUrl: 'views/milan.html',
        controller: 'MilanCtrl',
        controllerAs: 'milan'
      })
      .state('wcs', {
        url:'/wcs',
        templateUrl: 'views/wcs.html',
        controller: 'WcsCtrl',
        controllerAs: 'wcs'
      })
      .state('events', {
        url:'/events',
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      .state('hospitality', {
        url:'/hospitality',
        templateUrl: 'views/hospitality.html',
        controller: 'HospitalityCtrl',
        controllerAs: 'hospitality'
      })
      .state('proshows', {
        url:'/proshows',
        templateUrl: 'views/proshows.html',
        controller: 'ProshowsCtrl',
        controllerAs: 'proshows'
      })
      .state('lec_dems', {
        url:'/events/lec_dems',
        templateUrl: 'views/lec_dems.html',
        controller: 'LecdemsCtrl',
        controllerAs: 'lecdems'
      })
      .state('eventdetails', {
        url:'/events/:category/:event',
        templateUrl: 'views/eventdetails.html',
        controller: 'EventDetails',
        controllerAs: 'eventdetails'
      });
  });
