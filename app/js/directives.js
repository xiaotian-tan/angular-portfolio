'use strict';

/* Directives */


angular.module('myApp.directives', []).
    directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
          elm.text(version);
        };
    }]).
    directive('activeLink', function($location) {
        var link = function(scope, element, attrs) {
            scope.$watch(function() { 
                return $location.path(); 
            },
            function(path) {
                var url = element.find('a').attr('href');
                if (url) {
                    url = url.substring(1);
                }
     
                if (path == url) {
                    element.addClass("active");
                } else {
                    element.removeClass('active');
                }
     
            });
        };
     
        return {
            restrict: 'A',
            link: link
        };
    });
