var React = require('react');
require('./../../scss/components/groups.scss');

var GroupItem = React.createClass({

  propTypes: {
    group: React.PropTypes.object.isRequired,
  },

  render: function() {
    let {group} = this.props;
    return(
      <div className="groups-item">
        <div className="groups-img default">
          <div className="groups-counter">{group.members.length}</div>
        </div>
        <div className="groups-name">{group.name}</div>
      </div>
    );
  }
});

module.exports = GroupItem;
