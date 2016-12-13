(function() {
  'use strict';
  angular
    .module('app', [])
    .controller('AppCtrl', AppCtrl);

  function AppCtrl($scope) {
    $scope.apiData = apiData;
    console.log(apiData);
  }
})();
