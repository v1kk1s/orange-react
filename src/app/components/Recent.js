var React = require('react');
var ContactItem = require('../containers/ContactItemContainer');
var Header = require('./Header');
var Contacts = require('../config/contacts');
require('./../../scss/components/recent.scss');

var Recent = React.createClass({
  render: function() {
    return(
      <div>
        <Header title='Recent'/>
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

module.exports = Recent;
