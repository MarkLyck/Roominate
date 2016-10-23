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
    newState['age'] = this.refs.age.value;
    console.log('state after submit', newState);
  }

  render() {
    return (
      <form id="get-started" className="content" onSubmit={this.handleSubmit}>

        <div className="control" id="has-pets">
          <label className="label control-label"><h4>I own pets</h4></label>
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

        <div id="pet-true" className={`control ${!this.state.has_pets ? 'hidden' : ''}`}>
          <label className="label control-label"><h4>Pet type</h4></label>
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
          <label className="label control-label"><h4>I smoke</h4></label>
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

        <div className="control" id="lgbtq-friendly">
          <label className="label control-label"><h4>I am LGBTQ friendly</h4></label>
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

        <div className="control" id="parent">
          <label className="label control-label"><h4>I have children</h4></label>
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

        <div className="control" id="gender">
          <label className="label control-label"><h4>Gender</h4></label>
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

        <div className="control" id="relationship-status">
          <label className="label control-label"><h4>Relationship status</h4></label>
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

        <div className="control" id="temperament">
          <label className="label control-label"><h4>Temperament</h4></label>
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

        <div className="control" id="age">
          <label className="label control-label"><h4>Age</h4></label>
          <input type="text" placeholder="enter your age" ref="age" />
        </div>

        <input type="submit" value="Submit" className="control button is-primary" />

      </form>
    );
  }
}

export default GetStarted;
