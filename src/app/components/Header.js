var React = require('react');
var PropTypes = React.PropTypes;
require('./../../scss/components/header.scss');

var Header = React.createClass({

  propTypes: {
    title: PropTypes.string.isRequired,
  },

  render: function() {
    let {title} = this.props;
    return(
      <header className='header'>

        <div className='header-top-wrap'>
          <div className='header-menu-wrap'>
            <div className='nav-icon'> <div></div> </div>
          </div>

          <div className='header-title'> {title} </div>

          <a href='#' type='submit' className='header-search-icon' id='header-search-icon'></a>
        </div>
        <form action='#' className='header-search'>

          <input type='search' className='header-search-field' placeholder='Search'/>

        </form>
      </header>
    );
  }
});

module.exports = Header;
