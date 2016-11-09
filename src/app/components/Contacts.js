var React = require('react');
var ContactItem = require('../containers/ContactItemContainer');
var Header = require('../containers/HeaderContainer');
var Contacts = require('../config/contacts');
require('./../../scss/components/contacts.scss');

var ContactsView = React.createClass({
  render: function() {
    return(
      <div>
        <Header title='Contacts' />
        <div className="recent list-page">
          {Contacts.map((item, i) => {
            return(
              <ContactItem item={item} key={i}/>
            );
          })}
        </div>
      </div>
    );
  }
});

module.exports = ContactsView;
