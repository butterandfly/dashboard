'use strict';

var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

gulp.task("serve", function(callback) {
  // Start a webpack-dev-server
  var config = require('./webpack.config.js');
  var compiler = webpack(config);

  var webpackDevServerConfig = require('./webpack-dev-server.config.js');
  new WebpackDevServer(compiler, webpackDevServerConfig).listen(8080, "localhost", function(err) {
      if(err) {
        throw new gutil.PluginError("webpack-dev-server", err);
      }

      // Server listening
      gutil.log("[webpack-dev-server]", "http://localhost:8080");

      // keep the server alive or continue?
      // callback();
  });
});
