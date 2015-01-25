var express = require('express');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config.js');
var assign = require('object-assign');
var path =require('path');

var app = express();
app.use(express.static(path.join(__dirname, '../build')));
console.log(path.join(__dirname, '../build'));
var requireConfig = assign({}, webpackConfig, {
  recursive: true,
  // hot: true,
});
var webpackRequire = require("enhanced-require")(module, requireConfig);

app.use(webpackMiddleware(webpack(webpackConfig), {
}));

var appContent = webpackRequire("../client/app");
app.get('/', function (req, res) {
  var html =  '<!doctype html>' +
                '<html>' +
                    '<head>' +
                        '<meta name="viewport" content="width=device-width, initial-scale=1">' +
                        '<title>React Isomorphic example</title>' +
                        '<link rel="stylesheet" type="text/css" href="/app.css" />' +
                        '<script src="/app.js"></script>' +
                    '</head>' +
                    '<body>' +
                        appContent +
                    '</body>' +
                '</html>';

  res.status(200).send(html);
});

app.listen('8000');