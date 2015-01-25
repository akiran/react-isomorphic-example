var React = require('react');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var Count = require('./count');

var App = React.createClass({
  getInitialState: function () {
    return { show: false}
  },
  toggle: function () {
    this.setState({
      show: !this.state.show
    })
  },
  render: function () {
    var message = null;
    if (this.state.show) {
      message = <h1 className='success label'>You are seeing this message because application got bootstraped properly on client. So client side interactions are working</h1>;
    }
    return (
      <div className='grid-container'>
        <div className='title-bar primary'>
          <span className='title'>React Isomorphic Example</span>
        </div>
        <div style={{paddingTop: 20}}>
          <p>This is demo of <a href="https://github.com/akiran/react-isomorphic-example">react-isomorphic-example</a></p>
          <p>You can view page source and see html tags with "data-reactid" attibutes. This indicates that page is initially rendered on server</p>
          <p className='subheader'>For Example:</p>
          <p className='subheader'>{'<div class="header" data-reactid=".195oi7qibcw.0">React Isomorphic Example</div><div data-reactid=".195oi7qibcw.1">'} </p>
          <p>After javascript is loaded, reactjs picks up on client side to provide interactivity</p>
          <div>
            <a href="#" onClick={this.toggle} className='button'>{(this.state.show? 'Hide': 'Show') + ' Message'}</a>
          </div>
          <div>{message}</div>
          </div>
      </div>
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








