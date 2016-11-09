var React = require('react');
var PropTypes = React.PropTypes;
require('./../../scss/components/recent.scss');

var ContactItemView = React.createClass({

  propTypes: {
    item: PropTypes.object.isRequired,
    className:PropTypes.string.isRequired,
    deleteContact:PropTypes.func.isRequired,
    midSwipe:PropTypes.func.isRequired,
    startSwipe:PropTypes.func.isRequired,
    endSwipe:PropTypes.func.isRequired,
    goToConversation:PropTypes.func.isRequired,
  },

  render: function() {
    let {
      item,
      className,
      deleteContact,
      midSwipe,
      startSwipe,
      endSwipe,
      goToConversation
      } = this.props;
    return(
      <div className={className}
        onClick={goToConversation}
        onTouchStart={startSwipe}
        onTouchMove={midSwipe}
        onTouchEnd={endSwipe}>
        <div className='recent-contact'>

          <div className='recent-contact-logo'>
            <img src={`public/img/${item.icon}`} alt='profile icon'/>
          </div>

          <div className='recent-contact-caption'>
            <p className='recent-contact-name'> {item.name} </p>
            <p className='recent-contact-last-seen'>{item.lastSeen}</p>
          </div>
        </div>

        <div className='recent-delete-contact' onClick={deleteContact}>
          <div className='recent-delete-contact-icon'></div>
          <p className='recent-delete-contact-text'>Delete</p>
        </div>
      </div>
    );
  }
});

module.exports = ContactItemView;
