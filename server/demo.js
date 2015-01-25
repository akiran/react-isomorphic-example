var express = require('express');
var router = express.Router();
var webpackConfig = require('../webpack.config.js');
var assign = require('object-assign');

var requireConfig = assign({}, webpackConfig, {
  recursive: true,
  // hot: true,
});
var webpackRequire = require("enhanced-require")(module, requireConfig);

var appContent = webpackRequire("../client/app");
router.get('/', function (req, res) {
  var html =  '<!doctype html>' +
                '<html>' +
                    '<head>' +
                        '<meta name="viewport" content="width=device-width, initial-scale=1">' +
                        '<title>React Isomorphic example</title>' +
                        '<link rel="stylesheet" type="text/css" href="http://cdn.jsdelivr.net/zurb/foundation-apps-1.0.2.min.css" />' +
                        '<link rel="stylesheet" type="text/css" href="/app.css" />' +
                        '<script src="/app.js"></script>' +
                    '</head>' +
                    '<body>' +
                        appContent +
                    '</body>' +
                '</html>';

  res.status(200).send(html);
});

module.exports = router;