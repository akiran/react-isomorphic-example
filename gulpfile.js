var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var sass = require('gulp-sass');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('clean', function () {
  del('./build/*', function () {
    console.log('cleaning done');
  });
});

gulp.task('sass', function () {
  return  gulp.src(['./client/**/*.{scss,sass}'])
              .pipe(sass({ includePaths : ['bower_components', 'node_modules'], errLogToConsole: true}))
              .pipe(gulp.dest('./build'));
});

// gulp.task('webpack', function (callback) {
//   var myConfig = require('./webpack.config.js');
//   var webpackCompiler = webpack(myConfig, function(err, stats) {
//     if(err) throw new gutil.PluginError("webpack:build", err);
//     gutil.log("[webpack:build]", stats.toString({
//       colors: true
//     }));
//     callback();
//   });
// });

gulp.task('watch', ['sass'], function () {
  gulp.watch(['./client/**/*.{scss,sass}'], ['sass']);
  // gulp.watch(['./client/**/*.{js,jsx}'], ['webpack']);
}); 


// gulp.task('server', function (callback) {
//   var myConfig = require('./webpack.config.js');
//   var webpackCompiler = webpack(myConfig, function(err, stats) {
//   });

//   new WebpackDevServer(webpackCompiler, {
//     contentBase: './build',
//     hot: true,
//     debug: true
//   }).listen(4000, 'localhost', function (err, result) {
//   });
// });

gulp.task('default', ['watch']);