var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer-core');

module.exports = {
  entry: {
    'app.js': './client/app.jsx'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name]',
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loaders: ['jsx?harmony']},
      {
        test: /\.scss$/,
        loader: "style!css!sass?outputStyle=expanded&" + 
            "includePaths[]=" +
            (path.resolve(__dirname, "./bower_components")) + "&" +
            "includePaths[]=" +
            (path.resolve(__dirname, "./node_modules"))
      },
    ],
  },
  // postcss: [ autoprefixer({ browsers: ['last 2 version'] }) ],
  resolve : {
    alias: {

    },
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
  ]
};