module.exports = function(grunt) {
	
	grunt.initConfig({
		jshint: {
			src: {
				src: [
					'www/**/*.js'
				],
				exclude: [
				],
				options: {
					undef: true,
					globals: {
						module:true,
						process:true,
						console:true,
						require:true,
						__dirname:false
					}
				},
			}
		},
		jscs: {
			src: {
				src: [
					'!www/public/js/build/**/*.js',
					'www/**/*.js'
				],
				options: {
					//preset: "crockford",
					//config: "crockford.jscs",
					config: "./airbnb.jscs",
					requireCurlyBraces: [ "if" ],
					fix: false,
					disallowSpaceBeforeBlockStatements: true
				}
			}
		},
		ejslint: {
			target: ['www/**/*.ejs'],
			options: {
				delimiter: '%'
			}
		},
		watch: {
			src: {
				files: ['www/**/*.js'],
				tasks: ["default"],
				options: {
					spawn: false
				}
			},
			test: {
				files: ['src/**/*.js', 'tests/**/*.js', 'src/**/*.ejs'],
				tasks: ["test"],
				options: {
					spawn: false
				}
			}
		},
		clean: {
			default: {
				src: ['dist']
			},
			grunt: {
				src: ['Grunt.output']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-ejslint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');
	grunt.registerTask("default", ["jshint:src", "ejslint", "jscs:src"]);
	
	grunt.registerTask('watchSrc', ['watch:src']);
};