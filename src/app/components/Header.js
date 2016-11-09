var React = require('react');
var PropTypes = React.PropTypes;
var Menu = require('../components/Menu');
require('./../../scss/components/header.scss');

var Header = React.createClass({

  propTypes: {
    title: PropTypes.string.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    isMenuOpen: PropTypes.bool.isRequired,
  },

  render: function() {
    let {title, isMenuOpen, toggleMenu} = this.props;
    return(
      <header className='header'>

        <div className='header-top-wrap'>
          <div className='header-menu-wrap' onClick={toggleMenu}>
            <div className='nav-icon'> <div></div> </div>
          </div>

          <div className='header-title'> {title} </div>

          <a href='#' type='submit' className='header-search-icon' id='header-search-icon'></a>
        </div>
        <form action='#' className='header-search'>

          <input type='search' className='header-search-field' placeholder='Search'/>

        </form>

        <Menu isMenuOpen={isMenuOpen}/>
      </header>
    );
  }
});

module.exports = Header;
