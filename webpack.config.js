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
    path: path.resolve('./dist'),
    filename: '[name].js',
    publicPath: '/src/'
  },

  cache: true,
  debug: true,
  devtool: 'sourcemap',
  entry: {
    preset: [
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      './app/components/preset.js'
    ],
    door: [
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      './app/components/main.js',
    ]
  },

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'components': path.join(__dirname, 'app/components'),
      'rgPages': path.join(__dirname, 'app/components/rgPages'),
      'rgCommons': path.join(__dirname, 'app/components/rgCommons')
    }
  },
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel-loader'
      },
      // 一般的scss文件
      // 项目中的scss文件
      {
        test: /\.scss/,
        include: [
          path.resolve(__dirname, 'app/components')
        ],
        // 使用scope
        // loader: ExtractTextPlugin.extract("style-loader", "css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader?outputStyle=expanded!autoprefixer-loader?browsers=last 2 versions")
        // 不适用scope
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader?outputStyle=expanded!autoprefixer-loader?browsers=last 2 versions")
      },
      // 一般的less文件
      {
        test: /\.less/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      // 一般的css文件
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      { test: /\.json$/, loader: 'json' },
      // 图片
      { test: /\.jpe?g$|\.gif$|\.png|\.ico$/, loader: 'file?name=[name].[ext]' },
      // 字体文件
      { test: /\.eot($|\?)|\.ttf($|\?)|\.svg($|\?)|\.woff2?($|\?)/, loader: 'file?name=[name].[ext]' }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("[name].css")
  ]

};
