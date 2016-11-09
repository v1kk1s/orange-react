var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
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
            <Link to={'/recent'} className='menu-list-item'><span className='menu-recent'>Recent</span></Link>
            <Link className='menu-list-item'><span className='menu-groups'>Groups</span></Link>
            <Link to={'/contacts'} className='menu-list-item'><span className='menu-contacts'>Contacts</span></Link>
            <Link className='menu-list-item'><span className='menu-settings'>Settings</span></Link>
          </ul>

          <div className='menu-logout'>Log out</div>
        </div>

      </div>
    );
  }
});

module.exports = Menu;
