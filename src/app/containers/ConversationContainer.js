var React = require('react');
var PropTypes = React.PropTypes;
var allMessages = require('../config/messages');
var contacts = require('../config/contacts');
var ConversationView = require('../components/Conversation');
var ConversationEmptyView = require('../components/ConversationEmpty');

var ConversationContainer = React.createClass({

  getMessages: function() {
    let allMsgsInConv =  allMessages.filter((msg) => {
      return msg.convId === this.props.params.userId;
    });

    return allMsgsInConv.sort((a, b) => {
      return a.time - b.time;
    });
  },

  getUser: function() {
    let currUser = contacts.filter((contact) => {
      return contact.id == this.props.params.userId;
    });

    return currUser[0];
  },

  render: function() {
    let messages = this.getMessages();
    let currUser = this.getUser();
    let msgView = !messages.length ?
      <ConversationEmptyView currUser={currUser}/> :
      <ConversationView currUser={currUser} messages={messages}/>;

    return msgView;
  }
});

module.exports = ConversationContainer;
