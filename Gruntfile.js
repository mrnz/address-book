'use strict';
var path = require('path');
var buildTarget = 'www/build';

module.exports = function(grunt){

	grunt.initConfig({

		connect: {
		  server: {
		    options: {
		      port: 8000,
		      hostname: '*',
		      base: './',
		      keepalive: true
		    }
		  }
		},

		karma: {
    	unit: {
    		configFile: 'karma.conf.js'
    	},
    	travis:{
    		configFile: 'karma.travis.conf.js'
    	}
    },

    ngtemplates:  {
		  app:        {
		    src: './www/templates/**.html',
		    dest: './www/js/templates.js',
		    options:  {
		      bootstrap: function(module, script) {
		      	return 'define([],function() { function run($templateCache) {'+ script + '}; return [\'$templateCache\', run]; });';
		      },
		      url: function(url) {
		    		return url.replace(  './www/', '' );
		    	},

		    }
		  }
		},

		protractor: {
	    options: {
	      noColor: false
	    },
	    e2e_local: {
	      configFile: "./e2e-tests/conf.js"
	    },
	    e2e_travis: {
	      configFile: "./e2e-tests/travis.conf.js"
	    },
	  },

	  sass: {
	    dist: {
	      options: {
	        style: 'expanded',
	        sourcemap: 'none',
	        update: true
	      },
	      files: {
	        './www/css/base.css': './scss/base.scss',
	        './www/css/layout.css': './scss/layout.scss',
	        './www/css/module.css': './scss/module.scss',
	        './www/css/state.css': './scss/state.scss',
	      }
	    }
	  },



    watch: {
      scss: {
        files: ['./scss/*.scss'],
        tasks: ['sass:dist'],
        options: {
          spawn: false,
        },
      },
      templates: {
      	files: ['./www/templates/**/*.html'],
        tasks: ['templates'],
        options: {
          spawn: false,
        },
      }
    }



	});
	
	/* LOAD TASKS */
  grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');

	/* TASKS DEFINITIONS */
	grunt.registerTask('e2e-local', ["protractor:e2e_local"]);
	grunt.registerTask('e2e-travis', ["protractor:e2e_travis"]);

	grunt.registerTask('unit-local', ["karma:unit"]);
	grunt.registerTask('unit-travis', ["karma:travis"]);	
	
	grunt.registerTask('templates', ['ngtemplates']);
  grunt.registerTask('default', ['watch']);


};