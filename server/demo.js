var express = require('express');
var router = express.Router();
var webpackConfig = require('../webpack.config.js');
var assign = require('object-assign');
var _ = require('lodash');
var fs = require('fs');
var path = require('path');

var requireConfig = assign({}, webpackConfig, {
  recursive: true,
  // hot: true,
});
var webpackRequire = require("enhanced-require")(module, requireConfig);

var content = webpackRequire("../client/app");
var template = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
var jsPath = process.env.NODE_ENV === 'production' ? 'http://static.webrafter.com' : '';
jsPath += '/react-isomorphic-example.js';

router.get('/', function (req, res) {
  var html = _.template(template, {content: content, jsPath: jsPath});
  res.status(200).send(html);
});

module.exports = router;