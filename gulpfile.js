'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');


function defaultTask(cb) {
  // place code for your default task here
  cb();
}

gulp.task('sass', function() {
	return gulp.src('cartridge/scss/*.scss') // Get source files with gulp.src
    .pipe(sass().on('error', sass.logError)) // Sends it through a gulp plugin
    .pipe(csso()) // Minify the file
    .pipe(gulp.dest('cartridge/static/default/css')) // Outputs the file in the destination folder

});

//Gulp task to minify JavaScript files
gulp.task('scripts', function() {
  return gulp.src('cartridge/js/*.js')
    // Minify the file
    .pipe(uglify())
    // Output
    .pipe(gulp.dest('cartridge/static/default/js'))
});

exports.default = defaultTask