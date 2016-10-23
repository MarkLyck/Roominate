import React from 'react';
import './styles/get-started.css';

class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      has_pets: null,
      has_cats: false,
      has_dogs: false,
      is_smoker: null,
      lgbtq_friendly: null,
      has_children: null,
      sex: "",
      relationship_status: "",
      temperament: "",
      age: null
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
    newState['age'] = this.refs.age.value;
    console.log('state after submit', newState);
  }

  render() {
    return (
      <form id="get-started" onSubmit={this.handleSubmit}>

        <div className="control is-horizontal" id="has-pets">
          <label className="label control-label">I own pets</label>
          <input
            type="button"
            value="yes"
            className={`control button ${ this.state.has_pets ? 'selected' : ''}`}
            onClick={this.handleChange.bind(this, 'has_pets', true)}
          />
          <input
            type="button"
            value="no"
            className={`control button ${ this.state.has_pets === false ? 'selected' : ''}`}
            onClick={this.handleChange.bind(this, 'has_pets', false)}
          />
        </div>

        <div className="control is-horizontal" id="pet-true" className={`${!this.state.has_pets ? 'hidden' : ''}`}>
          <label className="label control-label">pet type</label>
          <input
            type="button"
            value="cat(s)"
            className="control button is-outlined"
            onClick={this.handleChange.bind(this, 'has_cats', true)}
          />
          <input
            type="button"
            value="dog(s)"
            className="control button is-outlined"
            onClick={this.handleChange.bind(this, 'has_dogs', true)}
          />
        </div>

        <div className="control is-horizontal" id="is-smoker">
          <label className="label control-label">I smoke</label>
          <input
            type="button"
            value="yes"
            className={`control button ${this.state.is_smoker ? 'selected' : ''}`}
            onClick={this.handleChange.bind(this, 'is_smoker', true)}
          />
          <input
            type="button"
            value="no"
            className={`control button ${ this.state.is_smoker === false ? 'selected' : ''}`}
            onClick={this.handleChange.bind(this, 'is_smoker', false)}
          />
        </div>

        <div className="control is-horizontal" id="lgbtq-friendly">
          <label className="label control-label">I am LGBTQ friendly</label>
          <input
            type="button"
            value="yes"
            className={`control button ${this.state.lgbtq_friendly ? 'selected' : ''}`}
            onClick={this.handleChange.bind(this, 'lgbtq_friendly', true)}
          />
          <input
            type="button"
            value="no"
            className={`control button ${this.state.lgbtq_friendly === false ? 'selected' : ''}`}
            onClick={this.handleChange.bind(this, 'lgbtq_friendly', false)}
          />
        </div>

        <div className="control is-horizontal" id="parent">
          <label className="label control-label">I have children</label>
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
        </div>

        <div className="control is-horizontal" id="gender">
          <label className="label control-label">Gender</label>
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
        </div>

        <div className="control is-horizontal" id="relationship-status">
          <label className="label control-label">Relationship status</label>
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
        </div>

        <div className="control is-horizontal" id="temperament">
          <label className="label control-label">Temperament</label>
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
        </div>

        <div className="control is-horizontal" id="age">
          <label className="label control-label">Age</label>
          <input type="text" placeholder="enter your age" ref="age" />
        </div>

        <input type="submit" value="Submit" className="control button is-primary" />

      </form>
    );
  }
}

export default GetStarted;
