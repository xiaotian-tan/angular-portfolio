'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('ProjectController', ['$scope', 'Portfolio', function($scope, Portfolio) {

  	// not show project detail as default
  	$scope._Index = -1;

  	// get projects from service
  	$scope.projects = Portfolio.query();

  	// detect if current project slide is active
  	$scope.isActive = function (index){
        return $scope._Index === index;
    };

    // show previous project
    $scope.showPrev = function (index){
		$scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.projects.length - 1;
    };

    // show next project
    $scope.showNext = function (index){
    	$scope._Index = ($scope._Index < $scope.projects.length - 1) ? ++$scope._Index : 0;
    };

    // show project on click
    $scope.showProject = function (index){
    	$scope._Index = index;
    };

  }]);