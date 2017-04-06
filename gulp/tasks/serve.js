var gulp = require('gulp');
var connect = require('gulp-connect');
var path = require('path');
 
gulp.task('serve', function() {
  connect.server({
    livereload: true,
    root: 'build'//path.resolve(__dirname, path.resolve('../..', 'build'))
  });
});