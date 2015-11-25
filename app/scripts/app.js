'use strict';
 
Parse.initialize("YxGFgDmkRXgIxyzpBOtfrzIRoK4EMa3lUWOsRaIp", "oRn25pSjNAATtKkZQt3G37yQ9CO1Xgf0cTg5rIE8");

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])

  // .config(['localStorageServiceProvider', function(localStorageServiceProvider){
  //   localStorageServiceProvider.setPrefix('ls');
  // }])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

