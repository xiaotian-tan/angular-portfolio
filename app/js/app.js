'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ui.bootstrap',
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'ngTouch',
  'myApp.controllers',
  'myApp.directives',
  'myApp.filters',
  'myApp.services',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {templateUrl: 'partials/projects.html', controller: 'ProjectsController'});
  $routeProvider.when('/projects/:projectId', {templateUrl: 'partials/project.html', controller: 'ProjectController'});
  $routeProvider.when('/', {templateUrl: 'partials/welcome.html', controller: 'WelcomeController'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactController'});

  $routeProvider.otherwise({redirectTo: '/'});
}]);