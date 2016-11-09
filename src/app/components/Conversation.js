var React = require('react');
var PropTypes = React.PropTypes;
var Header = require('./Header');
require('./../../scss/components/conversation.scss');

var ConversationView = React.createClass({

  propTypes: {
    messages: PropTypes.array.isRequired,
  },

  render: function() {
    let {messages} = this.props;
    return(
      <div>
        <Header title='Conversation'/>
        <div className="convers list-page">
          {messages.map((msg) => {
            if(msg.userId == 999) {
              return (`
              <div className="convers-wrap convers-me">
                <div className="convers-msg">{msg.message}</div>
                <div className="convers-date">{msg.time.getHours()}:{msg.time.getMinutes()}</div>
              </div>
                  `);
            } else {
              let icon = this.getIcon(msg.userId)[0].icon;
              return (`
              <div className="convers-wrap convers-other">
                <img src={"../public/img/" + {icon}} className="convers-img"/img>
                <div className="convers-msg">{msg.message}</div>
                <div className="convers-date">{msg.time.getHours()}:{msg.time.getMinutes()}</div>
              </div>
                  `);
            }

          }).join('')}
        </div>
      </div>
    );
  }
});

module.exports = ConversationView;
