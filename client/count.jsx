var React = require('react');

var Count = React.createClass({
  getInitialState: function () {
    return {count: 1}
  },
  incr: function () {
    this.setState({count: this.state.count + 1});
  },
  render: function () {
    return (
      <div>
        <button onClick={this.incr}>Count</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
})

module.exports = Count;