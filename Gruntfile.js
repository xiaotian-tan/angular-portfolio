module.exports = function(grunt) {


    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
        compass: { // Task
            dist: { // Target
                options: { // Target options
                	basePath: 'app',
                    sassDir: 'sass',
                    cssDir: 'css',
                    environment: 'production'
                }
            },
            dev: { // Another target
                options: {
                	basePath: 'app',
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            }
        },
        watch: {
			css: {
				files: '**/*.scss',
				tasks: ['compass:dist']
			}
		},
        imagemin: {
            dynamic: { // Another target
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'app/img/projects/', // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
                    dest: 'app/img/projects-thumb/' // Destination path prefix
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.registerTask('default',['watch']);

};