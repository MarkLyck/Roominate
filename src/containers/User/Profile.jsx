import React from 'react';
import store from '../../store'
import './styles/profile.css';

class Profile extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
        session: store.session
      }
    }

  render() {
    const session = this.state.session;
    return (
      <div className="profile-page">

        <div className="profile-img" style={{backgroundImage: `url(${session.image_url})`}}/>
        <h1 className="name">{session.first_name} {session.last_name}</h1>

        <section className="content">
          <ul className="info-list">
            <li className="info-item">
              <h4>Gender:</h4><h4>{session.sex}</h4>
            </li>
            <li className="info-item">
              <h4>Age:</h4><h4>{session.age}</h4>
            </li>
            <li className="info-item">
              <h4>Smoker:</h4><h4>{session.is_smoker ? 'yes' : 'no'}</h4>
            </li>
            <li className="info-item">
              <h4>Has Pets:</h4><h4>{session.has_pets ? 'yes' : 'no'}</h4>
            </li>
            <li className="info-item">
              <h4>Has Children:</h4><h4>{session.has_children ? 'yes' : 'no'}</h4>
            </li>
            <li className="info-item">
              <h4>LGBTQ Friendly:</h4><h4>{session.lgbtq_friendly ? 'yes' : 'no'}</h4>
            </li>
            <li className="info-item">
              <h4>Relationship Status:</h4><h4>{session.relationship_status}</h4>
            </li>
            <li className="info-item">
              <h4>Temperament</h4><h4>{session.temperament}</h4>
            </li>
          </ul>
        </section>

        <button className="button is-primary contact">Contact {session.first_name}</button>
      </div>
    );
  }
}

export default Profile;
