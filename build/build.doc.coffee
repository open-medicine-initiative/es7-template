gulp = require 'gulp'
apidoc = require 'gulp-apidoc'
run = require 'gulp-run'


# Generation of REST-API documentation
genapidoc = ->
	apidoc.exec
		src: "./src/resource/"
		dest: "./target/api-doc"
		includeFilters: [ ".*\\.js$" ]
genapidoc.description = "Generate API documentation for REST resources"

# Generation of ESDoc
# Can handle ES7 features using its new plugin architecture, hooray!
# See https://esdoc.org/config.html
genesdoc = ->
	run('esdoc -c ./esdoc.json').exec()
genesdoc.description = 'Generate esdoc-based documentation'


# Register tasks with gulp
gulp.task 'generate:api-doc', genapidoc
gulp.task 'generate:esdoc', genesdoc
