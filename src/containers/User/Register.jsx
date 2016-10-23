import React from 'react';
import './styles/login-signup.css';
import {Link} from 'react-router';
import Redirect from 'react-router/Redirect';
// import $ from 'jquery';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      age: 25,
      seeking: "",
      image_url: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(key, value) {
    const newProfile = this.state;
    newProfile[key] = value;
    this.setState(newProfile);
  }

  handleSubmit(e){
    e.preventDefault();
    const newProfile = this.state;
    newProfile["first_name"] = this.refs.firstname.value;
    newProfile["last_name"] = this.refs.lastname.value;
    newProfile["image_url"] = this.refs.image_url.value;
    newProfile["email"] = this.refs.email.value;
    localStorage.setItem('profile', newProfile);
    this.setState({redirect: true})
    // $.ajax({
    //   type: "POST",
    //   url: "http://a8509e9d.ngrok.io/roominate/profile/",
    //   data: newProfile
    // })
    // .done(() => {
    //   localStorage.setItem("email", newProfile["email"]);
    //   this.setState({redirect: true});
    // })
    // .fail(function() {
    //   alert("Something went wrong. Please try again.");
    // });
  }

  validate() {
    // if (this.refs.firstname.value && this.refs.lastname.value && this.refs.email.value && this.refs.password.value && this.refs.confirmpassword.value && this.refs.password.value === this.refs.confirmpassword.value) {
      // do something
    //} 
    if (this.refs.email.value && this.refs.password.value !== this.refs.confirmpassword.value) {
      alert("The passwords you've entered don't match. Please try again.");
    }
    //else {
    //  alert("Uh oh! Something went wrong. Please check that each field is filled out correctly, and try again.");
    //}
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

        <div className="login-signup-form-main">
          <p>All fields are required.</p>
          <br/>
          <br/>
          <form id="signup" className="content" onSubmit={this.handleSubmit}>
            <h3>About You</h3>
            <p className="control">
              <input className="input login-signup-input" type="firstname" placeholder="First Name" ref="firstname"/>
            </p>
            <p className="control">
              <input className="input login-signup-input" type="lastname" placeholder="Last Name" ref="lastname"/>
            </p>
            <div className="control" id="seeking">
              <p>I'm looking for a:</p>
              <input
                type="button"
                value="room"
                className={`control button ${this.state.seeking === "Room" ? "selected" : ""}`}
                onClick={this.handleChange.bind(this, "seeking", "Room")}
              />
              <input
                type="button"
                value="roommate"
                className={`control button ${this.state.seeking === "Roommate" ? "selected" : ""}`}
                onClick={this.handleChange.bind(this, "seeking", "Roommate")}
              />
            </div>
            <p>Copy the URL of or upload an image from your computer for your profile picture:</p>
            <p className="control has-addons">
              <input className="input is-expanded login-signup-input" type="text" placeholder="Image URL or Path" ref="image_url"/>
              <a className="button is-info">Upload</a>
            </p>

            <h3>Account Information</h3>
            <div className="control">
              <p>Your email will act as your username to sign in again in the future.</p>
              <input className="input login-signup-input" type="email" placeholder="Email" ref="email"/>
            </div>
            <p className="control">
              <input className="input login-signup-input" type="password" placeholder="Password" ref="password"/>
            </p>
            <p className="control">
              <input className="input login-signup-input" type="password" placeholder="Confirm Password" ref="confirmpassword"/>
            </p>
            <p className="control">
              <input type="submit" value="Sign Up" className="button is-primary login-signup-button" onClick={this.validate}/>
            </p>
            <p className="center">Existing User? <Link to="/">Log In</Link></p>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
