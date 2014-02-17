'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('ProjectController', ['$scope', 'Portfolio', function($scope, Portfolio) {

  	$scope.projects = Portfolio.query();

  }]);