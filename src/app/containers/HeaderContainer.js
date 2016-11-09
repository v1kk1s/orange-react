var React = require('react');
var PropTypes = React.PropTypes;
var HeaderView = require('../components/Header');

var HeaderContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isMenuOpen: false,
    };
  },

  startSwipe: function(e) {
    this.startX = e.touches[0].pageX;
  },

  endSwipe: function() {
    if(this.startX < this.endX  && this.startX < 50) this.setState({isMenuOpen: true});
    if(this.startX > this.endX  && this.startX < 500) this.setState({isMenuOpen: false});
  },

  midSwipe: function(e) {
    this.endX = e.touches[0].pageX;
  },

  toggleMenu: function() {
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  },

  //goToConversation: function() {
  //  this.context.router.push('/conversation/' + this.props.item.id);
  //},

  componentDidMount: function() {
    document.body.addEventListener('touchstart', this.startSwipe);
    document.body.addEventListener('touchend', this.endSwipe);
    document.body.addEventListener('touchmove', this.midSwipe);
  },

  componentWillUnmount: function() {
    document.body.removeEventListener('touchstart', this.startSwipe);
    document.body.removeEventListener('touchend', this.endSwipe);
    document.body.removeEventListener('touchmove', this.midSwipe);
  },

  render: function() {
    let {isMenuOpen} = this.state;
    return(
      <HeaderView
        title={this.props.title}
        toggleMenu={this.toggleMenu}
        isMenuOpen={isMenuOpen}/>
    );
  }
});

module.exports = HeaderContainer;
