var React = require('react');
var PropTypes = React.PropTypes;
var ContactItemView = require('../components/ContactItem');

var ContactItemContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

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

  goToConversation: function() {
    this.context.router.push('/conversation/' + this.props.item.id);
  },

  render: function() {
    let {item} = this.props;
    let {isDeleteBtnVisible, isContactDeleted} = this.state;
    let className = `recent-contact-entry-wrap
     ${isDeleteBtnVisible ? 'delete' : ''}
     ${isContactDeleted ? 'deleted' : ''}`;

    return(
      <ContactItemView
        goToConversation={this.goToConversation}
        endSwipe={this.endSwipe}
        startSwipe={this.startSwipe}
        midSwipe={this.midSwipe}
        deleteContact={this.deleteContact}
        item={item}
        className={className}/>
    );
  }
});

module.exports = ContactItemContainer;
