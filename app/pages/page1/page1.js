(function(window, _, angular, undefined) {
'use strict';

var module = angular.module('page.page1', [
  // module dependencies go here
  'component1',
]);

module.controller('Page1Ctrl',
function($scope, $routeParams) {
  // page logic goes here
  $scope.id = $routeParams.id;
});

})(window, window._, window.angular);
