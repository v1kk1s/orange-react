var React = require('react');
var PropTypes = React.PropTypes;
var Header = require('./Header');
require('./../../scss/components/conversation.scss');

var ConversationEmptyView = React.createClass({

  render: function() {
    return(
      <div>
        <Header title='Conversation'/>
        <div className="convers list-page">
          <div className="convers-none convers-msg">
            No messages in your conversation history :( <br/>
            Start messaging now!
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ConversationEmptyView;
