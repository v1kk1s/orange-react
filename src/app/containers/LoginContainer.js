var React = require('react');
var Credentials = require('../config/loginCredentials');
var LoginView = require('../components/Login');

var LoginContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      email: '',
      passwd: '',
    };
  },

  handleEmailChange: function(e) {
    this.setState({
      email: e.target.value
    });
  },

  handlePasswdChange: function(e) {
    this.setState({
      passwd: e.target.value
    });
  },

  handleSubmit: function(e) {
    e.preventDefault;

    let {email, passwd} = this.state;
    let valid = Credentials.some((user)=>{
      return user.username === email && user.password === passwd;
    });

    if (valid) {
      this.context.router.push('/recent');
    } else {
      document.getElementById('loginError').classList.add('login-error-shown');
    }
  },

  render: function() {
    return(
      <LoginView
        handleEmailChange={this.handleEmailChange}
        handlePasswdChange={this.handlePasswdChange}
        handleSubmit={this.handleSubmit}/>
    );
  }
});

module.exports = LoginContainer;