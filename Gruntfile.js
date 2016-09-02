module.exports = function(grunt) {
	
	grunt.initConfig({

		pkg : grunt.file.readJSON("package.json"),

		uglify : {
			my_target : {
				files : {
					'libs/bootstrap.min.js' : ['libs/bootstrap.js']
				}
			}
		}

	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask("default", ['uglify']);
};