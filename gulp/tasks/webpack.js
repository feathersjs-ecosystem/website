var gulp = require('gulp');
var util = require('gulp-util');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var config = require('../config').webpack;
var production = !!util.env.production || process.env.NODE_ENV === 'production';

if (production) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

gulp.task('webpack', function () {
  gulp.src(config.src)
    .pipe(webpackStream(config), function(err, stats) {
      if (err) {
        throw new gutil.PluginError('[webpack]', err);
      }

      gutil.log('[webpack]', stats.toString({colors: true}));
      callback();
    })
    .pipe(gulp.dest(config.dest));
});