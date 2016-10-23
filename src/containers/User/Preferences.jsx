import React from 'react';
import './styles/get-started.css';
import $ from 'jquery';

class Preferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: 'test@test.com',
      has_pets: true,
      is_smoker: true,
      lgbtq_friendly: true,
      has_children: true,
      sex: "",
      relationship_status: "",
      temperament: "",
      minimum_age: null,
      maximum_age: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key, value) {
    const newState = this.state;
    newState[key] = value;
    this.setState(newState);
  }

  toggleValue(key) {
    let value = false;
    console.log(this.state[key])
    if (!this.state[key]) {
      value = true;
    }
    const newState = this.state;
    newState[key] = value;
    this.setState(newState);
  }


  handleSubmit(e){
    e.preventDefault();
    const newState = this.state;
    newState['minimum_age'] = this.refs.min.value;
    newState['maximum_age'] = this.refs.max.value;
    console.log('state after submit', newState);
    $.ajax({
      type: "POST",
      data: newState,
      url: 'http://a8509e9d.ngrok.io/roominate/preferences/',
      error: function(msg) {
        console.log('you failed', msg);
      },
      success: function(data) {
        console.log(data);
      }
    });
  }

  render() {
    return (
      <div id="criteria">
        <h1>Tell us about your preferences.</h1>
        <form id="get-started" className="content" onSubmit={this.handleSubmit}>
          <div className="control" id="has-pets">
            <label className="label control-label"><h4>Has pets:</h4></label>
            <input
              type="button"
              value="yes"
              className={`control button ${ this.state.has_pets === true ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'has_pets', true)}
            />
            <input
              type="button"
              value="no"
              className={`control button ${ this.state.has_pets === false ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'has_pets', false)}
            />
            <input
              type="button"
              value="doesn't matter"
              className={`control button ${ this.state.has_pets === null ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'has_pets', null)}
            />
          </div>

          <div id="pet-true" className={`control ${!this.state.has_pets ? 'hidden' : ''}`}>
            <label className="label control-label"><h4>Pet type:</h4></label>
            <input
              type="button"
              value="cat(s)"
              className={`control button ${ this.state.has_cats ? 'selected' : ''}`}
              onClick={this.toggleValue.bind(this, 'has_cats')}
            />
            <input
              type="button"
              value="dog(s)"
              className={`control button ${ this.state.has_dogs ? 'selected' : ''}`}
              onClick={this.toggleValue.bind(this, 'has_dogs')}
            />
          </div>

          <div className="control" id="is-smoker">
            <label className="label control-label"><h4>Smoker:</h4></label>
            <input
              type="button"
              value="yes"
              className={`control button ${this.state.is_smoker === true ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'is_smoker', true)}
            />
            <input
              type="button"
              value="no"
              className={`control button ${ this.state.is_smoker === false ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'is_smoker', false)}
            />
            <input
              type="button"
              value="doesn't matter"
              className={`control button ${ this.state.is_smoker === null ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'is_smoker', null)}
            />
          </div>

          <div className="control" id="lgbtq-friendly">
            <label className="label control-label"><h4>LGBTQ friendly:</h4></label>
            <input
              type="button"
              value="yes"
              className={`control button ${this.state.lgbtq_friendly === true ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'lgbtq_friendly', true)}
            />
            <input
              type="button"
              value="no"
              className={`control button ${this.state.lgbtq_friendly === false ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'lgbtq_friendly', false)}
            />
            <input
              type="button"
              value="doesn't matter"
              className={`control button ${ this.state.lgbtq_friendly === null ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'lgbtq_friendly', null)}
            />
          </div>

          <div className="control" id="parent">
            <label className="label control-label"><h4>Has children:</h4></label>
            <input
              type="button"
                value="yes"
                className={`control button ${this.state.has_children ? 'selected' : ''}`}
                onClick={this.handleChange.bind(this, 'has_children', true)}
              />
            <input
              type="button"
              value="no"
              className={`control button ${this.state.has_children === false ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'has_children', false)}
            />
            <input
              type="button"
              value="doesn't matter"
              className={`control button ${ this.state.has_children === null ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'has_children', null)}
            />
          </div>

          <div className="control" id="gender">
            <label className="label control-label"><h4>Gender:</h4></label>
            <input
              type="button"
              value="female"
              className={`control button ${ this.state.sex === "Female" ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'sex', 'Female')}
            />
            <input
              type="button"
              value="male"
              className={`control button ${ this.state.sex === "Male" ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'sex', 'Male')}
            />
            <input
              type="button"
              value="non-binary"
              className={`control button ${ this.state.sex === "Non Binary" ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'sex', 'Non Binary')}
            />
            <input
              type="button"
              value="doesn't matter"
              className={`control button ${ this.state.sex === null ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'sex', null)}
            />
          </div>

          <div className="control" id="relationship-status">
            <label className="label control-label"><h4>Relationship status:</h4></label>
            <input
              type="button"
              value="single"
              className={`control button ${ this.state.relationship_status === "Single" ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'relationship_status', 'Single')}
            />
            <input
              type="button"
              value="coupled"
              className={`control button ${ this.state.relationship_status === "Coupled" ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'relationship_status', 'Coupled')}
            />
            <input
              type="button"
              value="doesn't matter"
              className={`control button ${ this.state.relationship_status === null ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'relationship_status', null)}
            />
          </div>

          <div className="control" id="temperament">
            <label className="label control-label"><h4>Temperament:</h4></label>
            <input
              type="button"
              value="extrovert"
              className={`control button ${ this.state.temperament === "Extrovert" ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'temperament', 'Extrovert')}
            />
            <input
              type="button"
              value="introvert"
              className={`control button ${ this.state.temperament === "Introvert" ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'temperament', 'Introvert')}
            />
            <input
              type="button"
              value="doesn't matter"
              className={`control button ${ this.state.temperament === null ? 'selected' : ''}`}
              onClick={this.handleChange.bind(this, 'temperament', null)}
            />
          </div>

          <div className="control" id="age">
            <label className="label control-label"><h4>Age:</h4></label>
            <input type="text" className="age-input" placeholder="min age" ref="min" />
            <input type="text" className="age-input" placeholder="max age" ref="max" />
          </div>
          <div className="submit-btn">
            <input type="submit" value="Submit" className="control button is-primary" />
          </div>

        </form>
      </div>
    );
  }
}

export default Preferences;
