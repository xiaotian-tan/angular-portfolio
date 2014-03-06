'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]).
  filter('skillfilter', function(){
  	return function(projects, search){
  		if (!search) {
	      return projects;
	    }
  		return projects.filter(function(element, index, array) {
	      for(var i = 0; i < element.skills.length; i++){
	      	if (element.skills[i] === search){
	      		return true;
	      	}
	      }
	    });
  	}
  });
