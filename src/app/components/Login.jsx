var React = require('react');
var ReactDOM = require('react-dom');

var Login = React.createClass({
  render: function() {
    return(
      <div class="login" id="loginPage">
        <a href="#" class="login-logo"></a>

        <div class="login-form-wrap">
          <h1>Welcome to orange chat</h1>

          <form action="#">

            <p id="loginError" class="login-error">Login or password are incorrect</p>

            <input type="text" id="login" class="login-username" placeholder="Username"/>
            <input type="password" id="password" class="login-password" placeholder="Password"/>

            <a href="#" class="login-pswd-forget"> Forgot your password?</a>

            <a href="#" id="loginSubmit" class="login-btn"> <span class="vert-align">Log in</span></a>
          </form>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Login />,
  document.getElementById('app')
);