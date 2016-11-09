var React = require('react');
var Header = require('../containers/HeaderContainer');
require('./../../scss/components/newGroup.scss');

var NewGroup = React.createClass({

  propTypes: {

  },

  render: function() {
    return(
      <div>
        <Header title='Create group' />
        <div className='new-group list-page'>
          <form id='addGroup'>
            <div className='new-group-create'>
              <div className='new-group-info-wrap'>
                <div className='new-group-img'></div>
                <input type='text' className='new-group-input' placeholder='Group name' id='groupName' />
                </div>

                <div className='new-group-instructions'>
                  <p className='new-group-set-photo'>Set Group Photo</p>
                  <p className='new-group-add-people'>
                    Add people to you group
                    <span className='new-group-counter'> <span id='newGroupCounter'>0</span>/100</span>
                  </p>
                  <p className='new-group-members' id='newGroupMember'></p>
                  <button className='new-group-submit' type='submit'>Create group</button>
                </div>
              </div>

              <div className='new-group-contacts-list'>

              </div>

            </form>
          </div>
      </div>
    );
  }
});

module.exports = NewGroup;
