(function(window, _, angular, undefined) {
'use strict';

// declare app and app dependencies
var app = angular.module('app', [
  // angular and third-party modules
  'ngRoute',
  'ngSanitize',
  'ngCookies',
  'ui.bootstrap',
  'ui.utils',
  // global components (for app.js and index.html)
  'navbar',
  // pages
  'page.home',
  'page.page1',
]);

// set app variables
app.value('appVersion', '1.0.0');

// configure app
app.config(function($routeProvider, $locationProvider, $compileProvider) {
  // html5mode
  $locationProvider.html5Mode({enabled: true, requireBase: false});

  // allow embedded file downloads (data:) without throwing 'unsafe'
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|data):/);

  // routes
  $routeProvider.when('/home', {
    templateUrl: 'pages/home/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'page',
    reloadOnSearch: false
  });
  $routeProvider.when('/page1/:id', {
    templateUrl: 'pages/page1/page1.html',
    controller: 'Page1Ctrl',
    controllerAs: 'page',
    reloadOnSearch: false
  });
  $routeProvider.otherwise({redirectTo: '/home'});
});

// make lodash available in angular expressions in all scopes
app.run(function($rootScope) {
  $rootScope.constructor.prototype._ = _;
});


})(window, window._, window.angular);
