var React = require('react');
var PropTypes = React.PropTypes;
var Header = require('../containers/HeaderContainer');
require('./../../scss/components/conversation.scss');

var ConversationEmptyView = React.createClass({

  propTypes: {
    currUser: PropTypes.object.isRequired,
  },

  render: function() {
    let {currUser} = this.props;
    return(
      <div>
        <Header title={`Conversation with ${currUser.name}`}/>
        <div className='convers list-page'>
          <div className='convers-none convers-msg'>
            No messages in your conversation history :( <br/>
            Start messaging now!
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ConversationEmptyView;
