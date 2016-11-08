var React = require('react');
require ('./../../scss/main.scss');

var Layout = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Layout;
