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
      .state('proshows', {
        url:'/proshows',
        templateUrl: 'views/proshows.html',
        controller: 'ProshowsCtrl',
        controllerAs: 'proshows'
      })
      .state('informals', {
        url:'/events/informals',
        templateUrl: 'views/informals.html',
        controller: 'InformalsCtrl',
        controllerAs: 'informals'
      })
      .state('choreo', {
        url:'/events/choreo',
        templateUrl: 'views/choreo.html',
        controller: 'ChoreoCtrl',
        controllerAs: 'choreo'
      })
      .state('fine_arts', {
        url:'/events/fine_arts',
        templateUrl: 'views/fine_arts.html',
        controller: 'FineartsCtrl',
        controllerAs: 'finearts'
      })
      .state('lec_dems', {
        url:'/events/lec_dems',
        templateUrl: 'views/lec_dems.html',
        controller: 'LecdemsCtrl',
        controllerAs: 'lecdems'
      })
      .state('speaking', {
        url:'/events/speaking',
        templateUrl: 'views/speaking.html',
        controller: 'SpeakingCtrl',
        controllerAs: 'speaking'
      })
      .state('classical_arts', {
        url:'/events/classical_arts',
        templateUrl: 'views/classical_arts.html',
        controller: 'ClassicalartsCtrl',
        controllerAs: 'classicalarts'
      })
      .state('lifestyle', {
        url:'/events/lifestyle',
        templateUrl: 'views/lifestyle.html',
        controller: 'LifestyleCtrl',
        controllerAs: 'lifestyle'
      })
      .state('light_music', {
        url:'/events/light_music',
        templateUrl: 'views/light_music.html',
        controller: 'LightmusicCtrl',
        controllerAs: 'lightmusic'
      })
      .state('design_and_media', {
        url:'/events/design_and_media',
        templateUrl: 'views/design_and_media.html',
        controller: 'Design_and_mediaCtrl',
        controllerAs: 'design_and_media'
      })
      .state('quizzing', {
        url:'/events/quizzing',
        templateUrl: 'views/quizzing.html',
        controller: 'QuizzingCtrl',
        controllerAs: 'quizzing'
      })
      .state('writing', {
        url:'/events/writing',
        templateUrl: 'views/writing.html',
        controller: 'WritingCtrl',
        controllerAs: 'writing'
      })
      .state('word_games', {
        url:'/events/word_games',
        templateUrl: 'views/word_games.html',
        controller: 'Word_gamesCtrl',
        controllerAs: 'word_games'
      })
      .state('thespian', {
        url:'/events/thespian',
        templateUrl: 'views/thespian.html',
        controller: 'ThespianCtrl',
        controllerAs: 'thespian'
      });
  });
