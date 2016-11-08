var React = require('react');
var PropTypes = React.PropTypes;
require('./../../scss/components/recent.scss');

var ContactItemView = React.createClass({

  propTypes: {
    item: PropTypes.object.isRequired,
  },

  render: function() {
    let {item} = this.props;
    return(
      <div className='recent-contact-entry-wrap' id={item.id}>
        <div className='recent-contact'>

          <div className='recent-contact-logo'>
            <img src={`public/img/${item.icon}`} alt='profile icon'/>
          </div>

          <div className='recent-contact-caption'>
            <p className='recent-contact-name'> {item.name} </p>
            <p className='recent-contact-last-seen'>{item.lastSeen}</p>
          </div>
        </div>

        <div className='recent-delete-contact'>
          <div className='recent-delete-contact-icon'></div>
          <p className='recent-delete-contact-text'>Delete</p>
        </div>
      </div>
    );
  }
});

module.exports = ContactItemView;
