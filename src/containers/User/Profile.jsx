import React from 'react';
import {Link} from 'react-router'

import store from '../../store'
import './styles/profile.css';

class Profile extends React.Component {
  constructor(props) {
      super(props)

      this.getStance = this.getStance.bind(this)

      let profile
      if(this.props.pathname !== '/profile') {
        if (this.props.params) {
          profile = store.profiles.data.filter((profile) => {
            if (profile.id === this.props.params.id)
              return true
            else return false
          })[0]
        } else {
          // TODO this should pull profile from room profile.
          profile = store.session.data
        }
      } else {
        profile = store.session.data
      }

      const pereference = store.pereferences.data.filter((pereference) => {
        if (pereference.profile === profile.email)
          return true
        else
          return false
      })[0]

      this.state = {
        profile: profile,
        pereference: pereference
      }
    }

  getStance(stance) {
    if (typeof stance === 'string' || typeof stance === 'number') {
      return stance
    } else if (stance === null) {
      return 'doesn\'t matter'
    } else if (stance === true) {
      return 'yes'
    } else {
      return 'no'
    }
  }

  render() {
    const profile = this.state.profile
    const pereference = this.state.pereference

    return (
      <div className="profile-page">

        <div className="profile-img" style={{backgroundImage: `url(${profile.image_url})`}}/>
        <h1 className="name">{profile.first_name} {profile.last_name.split('')[0]}.</h1>

        <section className="content">
          <ul className="info-list">
            <li className="info-item">
              <h4>Gender:</h4><h4>{profile.sex}</h4>
            </li>
            <li className="info-item">
              <h4>Age:</h4><h4>{profile.age}</h4>
            </li>
            <li className="info-item">
              <h4>Smoker:</h4><h4>{profile.is_smoker ? 'yes' : 'no'}</h4>
            </li>
            <li className="info-item">
              <h4>Has Pets:</h4><h4>{profile.has_pets ? 'yes' : 'no'}</h4>
            </li>
            <li className="info-item">
              <h4>Has Children:</h4><h4>{profile.has_children ? 'yes' : 'no'}</h4>
            </li>
            <li className="info-item">
              <h4>LGBTQ Friendly:</h4><h4>{profile.lgbtq_friendly ? 'yes' : 'no'}</h4>
            </li>
            <li className="info-item">
              <h4>Relationship Status:</h4><h4>{profile.relationship_status}</h4>
            </li>
            <li className="info-item">
              <h4>Temperament</h4><h4>{profile.temperament}</h4>
            </li>
          </ul>
        </section>

        <h1 className="name">Roommate criteria</h1>

        <section className="content">
          <ul className="info-list">
            <li className="info-item">
              <h4>Gender:</h4><h4>{this.getStance(pereference.sex)}</h4>
            </li>
            <li className="info-item">
              <h4>Age:</h4><h4>{this.getStance(pereference.minimum_age)} - {this.getStance(pereference.maximum_age)}</h4>
            </li>
            <li className="info-item">
              <h4>Smoker:</h4><h4>{this.getStance(pereference.is_smoker)}</h4>
            </li>
            <li className="info-item">
              <h4>Has Pets:</h4><h4>{this.getStance(pereference.has_pets)}</h4>
            </li>
            <li className="info-item">
              <h4>Has Children:</h4><h4>{this.getStance(pereference.has_children)}</h4>
            </li>
            <li className="info-item">
              <h4>LGBTQ Friendly:</h4><h4>{this.getStance(pereference.lgbtq_friendly)}</h4>
            </li>
            <li className="info-item">
              <h4>Relationship Status:</h4><h4>{this.getStance(pereference.relationship_status)}</h4>
            </li>
            <li className="info-item">
              <h4>Temperament</h4><h4>{this.getStance(pereference.temperament)}</h4>
            </li>
          </ul>
        </section>

        {profile.email !== store.session.data.email ? <a className="button is-primary contact" href={`mailto:${profile.email}`}>Contact {profile.first_name}</a> : <Link className="button is-primary contact" to="/profile/edit">Edit profile</Link>}
      </div>
    );
  }
}

export default Profile;
