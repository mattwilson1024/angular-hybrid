import { CharactersNg1Module } from './angular-components/characters.ng1-module.ts';

angular.module('example', [
  'ngRoute',
  'angularMoment',
  'example.characterspage',
  CharactersNg1Module
])
.config(['$locationProvider', function($locationProvider) {
  // Restore the hash-prefix to /#/ instead of /#!/ to remain backwards compatible with the pre-1.6 routing - see https://docs.angularjs.org/guide/migration#commit-aa077e8
  $locationProvider.hashPrefix('');
}])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/characters'});
}]);
