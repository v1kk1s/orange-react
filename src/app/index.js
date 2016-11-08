var React = require('react');
var ReactDOM = require('react-dom');
require('./../scss/main.scss');

var Hello = React.createClass({
  render: function() {
    return(
      <div> Hello react programm! </div>
    );
  }
});

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);