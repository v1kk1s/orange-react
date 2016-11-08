var React = require('react');

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
