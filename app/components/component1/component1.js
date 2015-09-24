(function(window, _, angular, undefined) {
'use strict';

var module = angular.module('component1', [
  // module dependencies go here
]);

module.directive('component1',
function() {
  return {
    restrict: 'E',
    scope: {
      arg: '=',
    },
    controller: function($scope, $element) {

      // component logic goes here
      $scope.$watch('arg', function(newVal, oldVal) {
        $scope.arg2 = newVal.toUpperCase();
      });

    },
    templateUrl: 'components/component1/component1.html',
    replace: false
  };
});

})(window, window._, window.angular);
