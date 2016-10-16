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

		copy: {
			index: {
				files: [
					{	expand: true, src: ['www/index.build.html'], dest: buildTarget, flatten: true, rename: function(dest, src) { return  dest+"/index.html"; }, filter: 'isFile'	}
				]
			}
		},

	  concat_css: {
	    options: {
	      // Task-specific options go here. 
	    },
	    all: {
	      src: ["./www/build/css/temp/*.css"],
	      dest: "./www/build/css/styles.css"
	    },
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
	    dev: {
	      options: {
	        style: 'expanded',
	        sourcemap: 'none',
	        update: false
	      },
	      files: {
	        './www/css/base.css': './scss/base.scss',
	        './www/css/layout.css': './scss/layout.scss',
	        './www/css/module.css': './scss/module.scss',
	        './www/css/transitions.css': './scss/transitions.scss',
	      }
	    },
			dist: {
	      options: {
	        style: 'compressed',
	        sourcemap: 'none',
	        update: false
	      },
	      files: {
	        './www/build/css/temp/base.css': './scss/base.scss',
	        './www/build/css/temp/layout.css': './scss/layout.scss',
	        './www/build/css/temp/module.css': './scss/module.scss',
	        './www/build/css/temp/transitions.css': './scss/transitions.scss',
	      }
	    }	    
	  },

		shell: {
	    options: {
	      stderr: false
	    },
	    target: {
	      command: 'r.js -o www/js/main.build.js'
	    },
	    deleteCss: {
				command: function() {
	    		var fs = require('fs');
	    		try{
	    			fs.statSync(__dirname+'/'+buildTarget).isDirectory();
	    			return 'rm -R '+buildTarget+'/css/temp';
	    		}catch(err){
	    			return '';
	    		}
	    	}	    	
	    },
	    deleteOldBuild: {
	    	command: function() {
	    		console.log(__dirname+'/'+buildTarget);
	    		var fs = require('fs');
	    		try{
	    			fs.statSync(__dirname+'/'+buildTarget).isDirectory();
	    			return 'rm -R '+buildTarget;
	    		}catch(err){
	    			return '';
	    		}
	    	}
	    }
	  },

    watch: {
      scss: {
        files: ['./scss/*.scss'],
        tasks: ['sass:dev'],
        options: {
          spawn: false,
        },
      },
      templates: {
      	files: ['./www/templates/js/**/*.html'],
        tasks: ['templates'],
        options: {
          spawn: false,
        },
      }
    }



	});
	
	/* LOAD TASKS */
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');

	/* TASKS DEFINITIONS */
	grunt.registerTask('e2e-local', ["protractor:e2e_local"]);
	grunt.registerTask('e2e-travis', ["protractor:e2e_travis"]);

	grunt.registerTask('unit-local', ["karma:unit"]);
	grunt.registerTask('unit-travis', ["karma:travis"]);	
	
	grunt.registerTask('build', ["shell:deleteOldBuild", "templates", "sass:dist", "shell:target", "copy:index", "concat_css:all", "shell:deleteCss"]);

	grunt.registerTask('templates', ['ngtemplates']);
  grunt.registerTask('default', ['watch']);


};