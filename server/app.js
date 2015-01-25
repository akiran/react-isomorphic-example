var express = require('express');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config.js');
var path =require('path');

var app = express();
app.use(express.static(path.join(__dirname, '../build')));

app.use(webpackMiddleware(webpack(webpackConfig), {
}));

app.use('/', require('./demo'));

app.listen('8000');