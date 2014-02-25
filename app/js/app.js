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
  $routeProvider.when('/projects', {
    templateUrl: 'partials/projects.html', 
    controller: 'ProjectsController',
    pageKey: 'projects'
  });
  $routeProvider.when('/projects/:projectId', {
    templateUrl: 'partials/project.html', 
    controller: 'ProjectController',
    pageKey: 'projects'
  });
  $routeProvider.when('/', {
    templateUrl: 'partials/welcome.html', 
    controller: 'WelcomeController',
    pageKey: 'home'
  });
  $routeProvider.when('/contact', {
    templateUrl: 'partials/contact.html', 
    controller: 'ContactController',
    pageKey: 'contact'
  });

  $routeProvider.otherwise({redirectTo: '/'});
}]).
run(['$rootScope', '$http', '$browser', '$timeout', "$route", "$location", "$window", 
  function ($scope, $http, $browser, $timeout, $route, $location, $window) {
  $scope.$on("$routeChangeSuccess", function (scope, next, current) {
    $scope.page = $route.current.pageKey;
    console.log($location.path());
    $window._gaq.push(['_trackPageview', $location.path()]);
  });
}]);