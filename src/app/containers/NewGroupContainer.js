var React = require('react');
var PropTypes = React.PropTypes;
var contacts = require('../config/contacts');
var NewGroupView = require('../components/NewGroup');

var NewGroupContainer = React.createClass({

  render: function() {
    return(
      <NewGroupView contacts={contacts}/>
    );
  }
});

module.exports = NewGroupContainer;
