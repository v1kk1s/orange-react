var React = require('react');
var PropTypes = React.PropTypes;
var groups = require('../config/groups');
var GroupsView = require('../components/Groups');

var GroupsContainer = React.createClass({

  render: function() {
    return(
      <GroupsView groups={groups}/>
    );
  }
});

module.exports = GroupsContainer;
