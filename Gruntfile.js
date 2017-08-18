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
				}
			},
			test: {
				src: [
					'tests/**/*.js'
				],
				exclude: [
				],
				options: {
					undef: true,
					globals: {
						console:true,
						describe:true,
						it: true,
						module:true,
						process:true,
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
			},
			test: {
				src: [
					'tests/**/*.js'
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
		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					quiet: false,
					clearRequireCache: true,
					noFail: false
				},
				src: [
					'tests/**/*.js'
				]
			}
		},
		mocha_istanbul: {
			coverage: {
				src: 'tests',
				options: {
					mask: '*[sS]pec.js'
				}
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
				files: ['www/**/*.js', 'tests/**/*.js', 'src/**/*.ejs'],
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
	grunt.loadNpmTasks('grunt-mocha-istanbul');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.registerTask("default", ["jshint:src", "ejslint", "jscs:src"]);
	grunt.registerTask("test", ["jshint:src","jshint:test", "ejslint", "jscs:src","jscs:test", "mochaTest"]);
	grunt.registerTask("testOnly", ["mochaTest"]);
	grunt.registerTask("coverage", ["jshint:src","jshint:test", "ejslint", "jscs:src","jscs:test", "mochaTest", "mocha_istanbul"]);
	grunt.registerTask("coverageOnly", ["mochaTest", "mocha_istanbul"] );
	
	grunt.registerTask('watchSrc', ['watch:src']);
	grunt.registerTask('watchTest', ['watch:test']);
};