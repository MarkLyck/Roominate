import React from 'react';
import './styles/login-signup.css';
import {Link} from 'react-router';
import Redirect from 'react-router/Redirect';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
    this.state = {redirect: false};
  }

  validate() {
    if (this.refs.email.value && this.refs.password.value && this.refs.confirmpassword.value && this.refs.password.value === this.refs.confirmpassword.value) {
      this.setState({redirect: true});
    } else if (this.refs.email.value && this.refs.password.value !== this.refs.confirmpassword.value) {
      alert("Passwords don't match. Please try again.");
    } else {
      alert("Something has gone wrong. Please check that each field is filled out correctly, and try again.");
    }
  }
  
  render() {
    if (this.state.redirect) {
      return <Redirect to="/get-started"/>
    }
    return (
      <div className="Register">
      
        <div className="page-header center">
          <h1>Sign Up</h1>
        </div>

        <div className="login-signup-form-main center">
          <p className="control center">
            <input className="input login-signup-input" type="email" placeholder="Email" ref="email"/>
          </p>
          <p className="control">
            <input className="input login-signup-input" type="password" placeholder="Password" ref="password"/>
          </p>
          <p className="control">
            <input className="input login-signup-input" type="password" placeholder="Confirm Password" ref="confirmpassword"/>
          </p>
          <p className="control">
            <button className="button is-primary login-signup-button" onClick={this.validate}>Sign Up</button>
          </p>
          <p>Existing User? <Link to="/">Log In</Link></p>
        </div>

      </div>
    );
  }
}

export default Register;
