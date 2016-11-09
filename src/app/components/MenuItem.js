var React = require('react');
var PropTypes = React.PropTypes;
require('./../../scss/components/menu.scss');

var Menu = React.createClass({

  propTypes: {
    isMenuOpen: PropTypes.bool.isRequired,
  },

  render: function() {
    let {isMenuOpen} = this.props;

    return(
      <div className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>

        <div className='menu-avatar-wrap'>
          <div className='menu-user-info'>
            <div className='menu-avatar'></div>
            <p className='menu-name'>Kate Mitty</p>
          </div>
        </div>

        <div className='menu-list-wrap'>
          <ul>
            <li className='menu-list-item'><span>test</span></li>
          </ul>

          <div className='menu-logout'>Log out</div>
        </div>

      </div>
    );
  }
});

module.exports = Menu;
