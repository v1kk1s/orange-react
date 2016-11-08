var React = require('react');
var PropTypes = React.PropTypes;
require('./../../scss/components/login.scss');

var Login = function(props) {
  return(
    <div className='login'>
      <a href='#' className='login-logo'></a>

      <div className='login-form-wrap'>
        <h1>Welcome to orange chat</h1>

        <form action='#' onSubmit={props.handleSubmit}>

          <p id='loginError' className='login-error'>Login or password are incorrect</p>

          <input type='text' className='login-username' placeholder='Username' onChange={props.handleEmailChange}/>
          <input type='password' className='login-password' placeholder='Password' onChange={props.handlePasswdChange}/>

          <a href='#' className='login-pswd-forget'> Forgot your password?</a>

          <button type='submit' className='login-btn'>Log in</button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswdChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

module.exports = Login;