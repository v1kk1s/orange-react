var React = require('react');
var PropTypes = React.PropTypes;
var Header = require('../containers/HeaderContainer');
require('./../../scss/components/conversation.scss');

var ConversationView = React.createClass({

  propTypes: {
    messages: PropTypes.array.isRequired,
    currUser: PropTypes.object.isRequired,
  },

  render: function() {
    let {messages, currUser} = this.props;

    return(
      <div className='convers list-page'>
        <Header title={`Conversation with ${currUser.name}`}/>
        <div>
          {messages.map((msg, i) => {
            if(msg.userId == 999) {
              return (
                <div className='convers-wrap convers-me' key={i}>
                  <div className='convers-msg'>{msg.message}</div>
                  <div className='convers-date'>{msg.time.getHours()}:{msg.time.getMinutes()}</div>
                </div>
              );
            } else {
              return (
                <div className='convers-wrap convers-other' key={i}>
                  <img src={`../public/img/${currUser.icon}`} className='convers-img' />
                    <div className='convers-msg'>{msg.message}</div>
                    <div className='convers-date'>{msg.time.getHours()}:{msg.time.getMinutes()}</div>
                  </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
});

module.exports = ConversationView;
