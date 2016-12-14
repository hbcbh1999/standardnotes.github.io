(function() {
  'use strict';
  angular
    .module('app', [])
    .controller('AppCtrl', AppCtrl);

  function AppCtrl($scope, $timeout) {
    $scope.apiData = apiData;
    $timeout(function(){
      gumshoe.init();
    }, 100)
  }
})();
