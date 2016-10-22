import React, { Component } from 'react';
import './styles/login-signup.css';
import {Link} from 'react-router';
import Redirect from 'react-router/Redirect';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
    this.state = {redirect: false};
  }

  validate() {
    if (this.refs.email.value && this.refs.password.value) {
      this.setState({redirect: true});
    } else {
      alert("The email and password combination can't be found. Please try again.");
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/browse"/>
    }
    return (
      <div className="Login">
        <div className="page-header center">
          <h1>Log In</h1>
        </div>

        <div className="login-signup-form-main center">
          <p className="control center">
            <input className="input login-signup-input" type="email" placeholder="Email" ref="email"/>
          </p>
          <p className="control">
            <input className="input login-signup-input" type="password" placeholder="Password" ref="password"/>
          </p>
          <p className="forgot-password"><a href="#">Forgot Password?</a></p>
          <p className="control">
            <button className="button is-primary login-signup-button" onClick={this.validate}>Log In</button>
          </p>
          <p>New to Roominate? <Link to="/register">Sign Up</Link></p>
        </div>
      </div>
    );
  }
}

export default Login;
