angular.module('example.characterspage', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/characters', {
      template: require('./characters-page.html'),
      controller: 'CharactersPageCtrl',
      reloadOnSearch: false
    });
  }])
  .controller('CharactersPageCtrl', ['$scope', function ($scope) {

    $scope.firstEpisode = moment({ year: 1989, month: 11, day: 17 });

  }]);
