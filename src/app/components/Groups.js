var React = require('react');
var GroupItem = require('./GroupsItem');
var Router = require('react-router');
var Link = Router.Link;
var Header = require('../containers/HeaderContainer');
require('./../../scss/components/groups.scss');

var Groups = React.createClass({

  propTypes: {
    groups: React.PropTypes.array.isRequired,
  },

  render: function() {
    let {groups} = this.props;
    return(
      <div>
        <Header title='Groups' />
        <div className='groups list-page'>

          {groups.map((group, i) => {
            return(
              <GroupItem key={i} group={group} />
            );
          })}

          <Link to={'/new-group'} className='groups-add-new'>Add new group</Link>

        </div>
      </div>
    );
  }
});

module.exports = Groups;
