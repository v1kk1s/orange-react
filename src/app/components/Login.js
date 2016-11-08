var React = require('react');
require('./../../scss/components/login.scss');

var Login = React.createClass({
  render: function() {
    return(
      <div className='login' id='loginPage'>
        <a href='#' className='login-logo'></a>

        <div className='login-form-wrap'>
          <h1>Welcome to orange chat</h1>

          <form action='#'>

            <p id='loginError' className='login-error'>Login or password are incorrect</p>

            <input type='text' id='login' className='login-username' placeholder='Username'/>
            <input type='password' id='password' className='login-password' placeholder='Password'/>

            <a href='#' className='login-pswd-forget'> Forgot your password?</a>

            <a href='#' id='loginSubmit' className='login-btn'> <span className='vert-align'>Log in</span></a>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Login;