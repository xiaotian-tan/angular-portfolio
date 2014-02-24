'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('WelcomeController', ['$scope', function($scope){

  	}]).
  	controller('ContactController', ['$scope', function($scope){
  		
  	}]).
  	controller('ProjectController', ['$scope', '$timeout', 'Portfolio', '$location', '$anchorScroll', 
  		function($scope, $timeout, Portfolio, $location, $anchorScroll) {

		// not show project detail as default
		$scope._Index = -1;

		$scope._showProject = false;

		// get projects from service
		$scope.projects = Portfolio.query();

		$scope.toggleProject = function (){
			return $scope._showProject;
		}

		// detect if current project slide is active
		$scope.isActive = function (index){
			console.log('$scope._Index:' + index + ' index:' + index);
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

		// show project on click and scroll to top
		$scope.scrollTo = function (id, event, index){
			// $location.hash(id);
		    // call $anchorScroll()
		    $( "html" ).animate({
			    scrollTop: 0,
			  }, 500, "easeInQuart");

		    var scrolled = $(window).scrollTop();
		    if (scrolled > 0){
		    	$timeout(function() {
			    	$scope.showProject(index);
			    }, 1000);
		    }
		    else {
		    	$scope.showProject(index);
		    }
		    // event.preventDefault();
		};

		// Show project
		$scope.showProject = function(index){
		  	$scope._Index = index;
			$scope._showProject = true;
			// console.log($scope._Index + " " + $scope._showProject);
		}

		$scope.closeProject = function (){
			$scope._showProject = false;
		}
	}]);