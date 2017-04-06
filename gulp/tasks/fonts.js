var changed = require('gulp-changed');
var gulp = require('gulp');
var config = require('../config').fonts;
var connect = require('gulp-connect');

gulp.task('fonts', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload());
});