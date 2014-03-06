# Angular Portforlio

Example of the simple portfolio app for AngularJS. This app is inspired by [angular-seed](https://github.com/angular/angular-seed) and [angular-express-seed](https://github.com/btford/angular-express-seed).

The live demo can be viewed at [xiaotian-tan.heroku.com](http://xiaotian-tan.heroku.com). The live demo is using Amozon S3 to host some static files like images and project data files.

### Grunt: 
`Gruntfile.js`

*	grunt-contrib-watch ( used to watch and compile **scss** files )
*	grunt-contrib-compass ( Compile **Sass** to CSS using **Compass** )
*	grunt-contrib-imagemin ( Minify PNG, JPEG and GIF images )

### Bower Components:
`bower.json`

*	bootstrap
*	jquery
*	angular-masonry
*	angular-touch 
*	fast-click


### Directives:

`app/js/directives.js`

*	ActiveLink: add active class for menu items
*	animateSkill: when imageloader finish run skillbar animation
*	Map: render custom google maps
*	imgPreload: preload images on load
*	imageLoader: use createjs to preload images 

### Services:

`app/js/services.js`

*	Get projects data from a JSON file using RESTful Service

### Controllers:

`app/controllers.js`

*	ProjectController: used to control project navigation

### Filters:

`app/filters.js`

*	skillfilter: used to filter the skills used in projects

##TODO

*	Minimize all JS files including bower_components on production environments
*	Dynamically preload all images before enter page view
*	Experiment more features provided by AngularJS.
*	Build a backend system to manage pages and projects.
*	Use MangoDB and Express to build a simple blog to update content easier.