var React = require('react');
var PropTypes = React.PropTypes;
var ConversationView = require('../components/Conversation');
var ConversationEmptyView = require('../components/ConversationEmpty');

var ConversationContainer = React.createClass({

  render: function() {

    return(
      <ConversationEmptyView />
    );
  }
});

module.exports = ConversationContainer;
