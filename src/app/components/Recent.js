var React = require('react');
var ContactItem = require('../containers/ContactItemContainer');
var Header = require('../containers/HeaderContainer');
require('./../../scss/components/recent.scss');

var Recent = React.createClass({

  propTypes: {
    contacts: React.PropTypes.array.isRequired,
  },

  render: function() {
    let {contacts} = this.props;
    return(
      <div>
        <Header title='Recent' />
        <div className='recent list-page'>
          {contacts.map((item, i) => {
            return(
              <ContactItem item={item} key={i}/>
            );
          })}
        </div>
      </div>
    );
  }
});

module.exports = Recent;
