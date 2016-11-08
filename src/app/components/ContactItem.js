var React = require('react');
var PropTypes = React.PropTypes;
require('./../../scss/components/recent.scss');

var ContactItemView = React.createClass({

  propTypes: {
    item: PropTypes.object.isRequired,
  },

  getInitialState: function() {
    return {
      isDeleteBtnVisible: false,
      isContactDeleted: false,
    };
  },

  startSwipe: function(e) {
    this.startX = e.touches[0].pageX;
  },

  endSwipe: function() {
    this.startX > this.endX
      ? this.setState({isDeleteBtnVisible: true})
      : this.setState({isDeleteBtnVisible: false});
  },

  midSwipe: function(e) {
    this.endX = e.touches[0].pageX;
  },

  deleteContact: function() {
    this.setState({isContactDeleted: true})
  },

  render: function() {
    let {item} = this.props;
    let {isDeleteBtnVisible, isContactDeleted} = this.state;
    let className = `recent-contact-entry-wrap
     ${isDeleteBtnVisible ? 'delete' : ''}
     ${isContactDeleted ? 'deleted' : ''}`;

    return(
      <div className={className}
        onTouchStart={this.startSwipe}
        onTouchMove={this.midSwipe}
        onTouchEnd={this.endSwipe}>
        <div className='recent-contact'>

          <div className='recent-contact-logo'>
            <img src={`public/img/${item.icon}`} alt='profile icon'/>
          </div>

          <div className='recent-contact-caption'>
            <p className='recent-contact-name'> {item.name} </p>
            <p className='recent-contact-last-seen'>{item.lastSeen}</p>
          </div>
        </div>

        <div className='recent-delete-contact' onClick={this.deleteContact}>
          <div className='recent-delete-contact-icon'></div>
          <p className='recent-delete-contact-text'>Delete</p>
        </div>
      </div>
    );
  }
});

module.exports = ContactItemView;
