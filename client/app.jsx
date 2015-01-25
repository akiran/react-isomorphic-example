var React = require('react');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var Count = require('./count');

var App = React.createClass({
  render: function () {
    return (
      <div><Count /></div>
    );
  }
})

if (ExecutionEnvironment.canUseDOM) {
  document.addEventListener('DOMContentLoaded', function () {
    React.render(React.createElement(App), document.body);
  });
} else {
  module.exports = React.renderToString(React.createElement(App));
}








