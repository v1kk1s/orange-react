var React = require('react');
var PropTypes = React.PropTypes;
var contacts = require('../config/contacts');
var RecentView = require('../components/Recent');

var RecentContainer = React.createClass({

  getUser: function() {
    let sortedByDate = contacts.sort((a, b) => {
      return (new Date(a.seen) - new Date(b.seen)) * -1;
    });

    return sortedByDate.slice(0, 10);
  },

  render: function() {
    let recent = this.getUser();
    return(
      <RecentView contacts={recent}/>
    );
  }
});

module.exports = RecentContainer;
