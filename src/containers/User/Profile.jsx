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
      <div className="Profile">

        <img className="profile-img" src={session.image_url}/>

        <section className="content">
          <ul className="info-list">
            <li className="info-item">
              <h4>Age:</h4><h4>{session.age}</h4>
            </li>
            <li className="info-item">
              <h4>Smoker:</h4><h4>{session.is_smoker ? <i className="material-icons green-color">check</i> : <i className="material-icons red-color">clear</i>}</h4>
            </li>
            <li className="info-item">
              <h4>Has Pets:</h4><h4>{session.has_pets ? <i className="material-icons green-color">check</i> : <i className="material-icons red-color">clear</i>}</h4>
            </li>
            <li className="info-item">
              <h4>Has Children:</h4><h4>{session.has_children ? <i className="material-icons green-color">check</i> : <i className="material-icons red-color">clear</i>}</h4>
            </li>
            <li className="info-item">
              <h4>LGBTQ Friendly:</h4><h4>{session.lgbtq_friendly ? <i className="material-icons green-color">check</i> : <i className="material-icons red-color">clear</i>}</h4>
            </li>
            <li className="info-item">
              <h4>Sex:</h4><h4>{session.sex}</h4>
            </li>
            <li className="info-item">
              <h4>Relationship Status:</h4><h4>{session.relationship_status}</h4>
            </li>
            <li className="info-item">
              <h4>Temperament</h4><h4>{session.temperament}</h4>
            </li>
          </ul>
        </section>

      </div>
    );
  }
}

export default Profile;
