module.exports = function(grunt) {


	grunt.initConfig({
	  imagemin: {   
	    dynamic: {                         // Another target
	      files: [{
	        expand: true,                  // Enable dynamic expansion
	        cwd: 'app/img/projects/',                   // Src matches are relative to this path
	        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
	        dest: 'app/img/projects-thumb/'                  // Destination path prefix
	      }]
	    }
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['imagemin']);

};