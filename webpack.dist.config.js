/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].entry.js',
  },

  cache true,
  debug: true,
  // devtool: 'sourcemap',
  entry: {
      preset: './app/components/preset.js',
      main2: './app/components/main2.js'
  },

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'styles': __dirname + '/app/styles',
      'mixins': __dirname + '/app/mixins',
      'components': __dirname + '/app/components'
    }
  },
  module: {
    // preLoaders: [{
    //   test: /\.(js|jsx)$/,
    //   exclude: /node_modules/,
    //   loader: 'eslint-loader'
    // }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel-loader'
    }, {
      test: /\.scss/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader!autoprefixer-loader?browsers=last 2 versions")
    }, {
      test: /\.less/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]")
    },
    { test: /\.json$/, loader: 'json' },
    { test: /\.jpe?g$|\.gif$|\.png|\.ico$/, loader: 'file?name=[name].[ext]' },
    // { test: /\.eot$|\.ttf$|\.svg$|\.woff2?$/, loader: 'file?name=[name].[ext]' }
    { test: /\.eot($|\?)|\.ttf($|\?)|\.svg($|\?)|\.woff2?($|\?)/, loader: 'file?name=[name].[ext]' }
    ]
  },

  plugins: [
    new ExtractTextPlugin("[name].css")
  ]

};
