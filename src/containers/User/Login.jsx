import React, { Component } from 'react';
import './styles/login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">

        <div className="Login-header center">
          <h1>Log In</h1>
        </div>

        <div className="login-form-main center">
          <p className="control has-icon">
            <input className="input" type="email" placeholder="Email"/>
            <i className="material-icons">email</i>
          </p>
          <p className="control has-icon">
            <input className="input" type="password" placeholder="Password"/>
            <i className="material-icons">lock</i>
          </p>
          <p className="control">
            <button className="button is-primary">Log In</button>
            <p>Remember me</p>
            <button className="button is-link">Forgot Password</button>
          </p>
        </div>

        <div>
          <p>New to Roominate? <a href="#">Sign up!</a></p>
        </div>

      </div>
    );
  }
}

export default Login;
