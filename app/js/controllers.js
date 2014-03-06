'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('WelcomeController', ['$scope', function($scope){

  	}]).
  	controller('ContactController', ['$scope', function($scope){
  		
  	}]).
  	controller('ProjectController', ['$scope', '$routeParams', 'Portfolio', 
  		function($scope, $routeParams, Portfolio){

  			$scope.prevProject = null;
  			$scope.nextProject = null;

	  		$scope.project = Portfolio.get({projectId: $routeParams.projectId});

	  		$scope.projects = Portfolio.query();



	  		$scope.showPrev = function (project){
		  		$scope.currentIndex = $scope.getArrayIndexForKey($scope.projects, "slug", $routeParams.projectId);
	  			if ($scope.currentIndex > 0){
	  				$scope.prevProject = $scope.projects[$scope.currentIndex - 1];
	  			}
	  			else {
	  				$scope.prevProject = $scope.projects[$scope.projects.length - 1];
	  			}
	  		}
	  		$scope.showNext = function (project){
		  		$scope.currentIndex = $scope.getArrayIndexForKey($scope.projects, "slug", $routeParams.projectId);
	  			if ($scope.currentIndex < ($scope.projects.length - 1)){
	  				console.log($scope.project);
	  				$scope.nextProject = $scope.projects[$scope.currentIndex + 1];
	  			}
	  			else {
	  				$scope.nextProject = $scope.projects[0];
	  			}
	  		}
	  		$scope.getArrayIndexForKey = function(arr, key, val){
			    for(var i = 0; i < arr.length; i++){
			        if(arr[i][key] == val)
			            return i;
			    }
			    return -1;
			}
  	}]).
  	controller('ProjectsController', ['$scope', '$timeout', 'Portfolio', '$location', '$anchorScroll', 
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
			$scope.isActive = function (project){
				var index = $scope.projects.indexOf(project);
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
			    // var scrolled = $(window).scrollTop();
			    
			    // if (scrolled > 0){
			    // 	$( "html, body" ).animate({
					  //   scrollTop: 0,
					  // }, 500, "easeInQuart", function(){
					  // 	console.log('test');
					  // });

			    // 	$timeout(function() {
				   //  	$scope.showProject(index);
				   //  }, 1000);
			    // }
			    // else {
			    	$scope._Index = index;
				$scope._showProject = true;
			    // }
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