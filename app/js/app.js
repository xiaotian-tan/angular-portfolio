'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ui.bootstrap',
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {templateUrl: 'partials/projects.html', controller: 'ProjectController'});
  $routeProvider.when('/', {templateUrl: 'partials/welcome.html', controller: 'WelcomeController'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactController'});

  $routeProvider.otherwise({redirectTo: '/'});
}]);
