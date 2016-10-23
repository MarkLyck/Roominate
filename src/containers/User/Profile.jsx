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
    let user = this.state.session;
    if(this.props.pathname !== '/profile') {
      user = this.state.session;
    }
    return (
      <div className="profile-page">

        <div className="profile-img" style={{backgroundImage: `url(${user.image_url})`}}/>
        <h1 className="name">{user.first_name} {user.last_name}</h1>

        <section className="content">
          <ul className="info-list">
            <li className="info-item">
              <h4>Gender:</h4><h4>{user.sex}</h4>
            </li>
            <li className="info-item">
              <h4>Age:</h4><h4>{user.age}</h4>
            </li>
            <li className="info-item">
              <h4>Smoker:</h4><h4>{user.is_smoker ? 'yes' : 'no'}</h4>
            </li>
            <li className="info-item">
              <h4>Has Pets:</h4><h4>{user.has_pets ? 'yes' : 'no'}</h4>
            </li>
            <li className="info-item">
              <h4>Has Children:</h4><h4>{user.has_children ? 'yes' : 'no'}</h4>
            </li>
            <li className="info-item">
              <h4>LGBTQ Friendly:</h4><h4>{user.lgbtq_friendly ? 'yes' : 'no'}</h4>
            </li>
            <li className="info-item">
              <h4>Relationship Status:</h4><h4>{user.relationship_status}</h4>
            </li>
            <li className="info-item">
              <h4>Temperament</h4><h4>{user.temperament}</h4>
            </li>
          </ul>
        </section>

        <a className="button is-primary contact" href={`mailto:${user.email}`}>Contact {user.first_name}</a>
      </div>
    );
  }
}

export default Profile;
