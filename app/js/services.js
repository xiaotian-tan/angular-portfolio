'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource']).
  value('version', '0.1').
  factory('Portfolio', ['$resource',
  	function($resource){
    	return $resource('http://tanportfolio.s3.amazonaws.com/data/:projectId.json', {}, {
			query: {method:'GET', params:{projectId:'projects'}, isArray:true}
    	}
    );
  }]);
