var React = require('react');
require('./../../scss/components/newGroup.scss');

var NewGroupContact = React.createClass({

  propTypes: {
    contact: React.PropTypes.object.isRequired,
  },

  render: function() {
    let {contact} = this.props;

    return(
      <div className='new-group-contact'>
        <input type='radio' className='new-group-membership-indicator' value={contact.id}/>
        <div className='new-group-added'></div>
        <div className={`new-group-contact-info ${contact.online ? 'online' : ''} `}>
          <img src={`public/img/${contact.icon}`} className='new-group-contact-img' alt='profile icon'/>
          <p className='new-group-contact-name'>{contact.name}</p>
        </div>
      </div>
    );
  }
});

module.exports = NewGroupContact;
