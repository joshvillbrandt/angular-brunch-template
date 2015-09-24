(function(window, _, angular, undefined) {
'use strict';

var module = angular.module('navbar', [
  // module dependencies go here
]);

module.directive('navbar',
function($location, appVersion) {
  return {
    restrict: 'E',
    scope: {
      arg: '=',
    },
    controller: function($scope, $element) {
      $scope.appVersion = appVersion;

      $scope.urlStartsWith = function(str) {
        return $location.url().startsWith(str);
      };
    },
    templateUrl: 'components/navbar/navbar.html',
    replace: false
  };
});

})(window, window._, window.angular);
