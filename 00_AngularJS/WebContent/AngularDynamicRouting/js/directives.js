'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['nombre', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
