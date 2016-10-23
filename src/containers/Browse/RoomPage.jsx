import React, { Component } from 'react'
import store from '../../store'
import './styles/roomPage.css'
import Profile from '../User/Profile'
import { getRooms } from '../../helpers'

class RoomPage extends Component {
  constructor(props) {
    super(props)

    this.state = { room: {} }
  }

  componentDidMount() {
    if (store.rooms.data.length) {
      store.rooms.data.forEach((room) => {
        if (Number(this.props.params.id) === Number(room.id))
          this.setState({ room: room })
      })
    } else {
      getRooms().then((rooms) => {

        rooms.forEach((room) => {
          if (Number(this.props.params.id) === Number(room.id)) {
            this.setState({ room: room })
          }
        })
      })
    }
  }


  render() {
    const room = this.state.room
    return (
      <div className="room-page">
        <div className="slider">
          <div className="room-image" style={{ backgroundImage: `url(${room.image_url})`}}/>
        </div>
        <section className="content">
          <h3 className="title">{room.title}</h3>
          <p className="description">{room.description}</p>
          <ul className="info-list">
            <li className="info-item">
              <h4>Monthly rent</h4><h4>${room.monthly_rent}</h4>
            </li>
            <li className="info-item">
              <h4>Deposit</h4><h4>${room.deposit}</h4>
            </li>
            <li className="info-item">
              <h4>Sqft</h4><h4>{room.square_footage} Sqft</h4>
            </li>
            <li className="info-item">
              <h4>Rooms</h4><h4>{room.number_of_rooms}</h4>
            </li>
            <li className="info-item">
              <h4>Bathrooms</h4><h4>{room.number_of_bathrooms}</h4>
            </li>
            <li className="info-item">
              <h4>Dishwasher</h4><h4>{room.has_dishwasher ? <i className="material-icons green-color">check</i> : <i className="material-icons red-color">clear</i>}</h4>
            </li>
            <li className="info-item">
              <h4>Washer / Dryer</h4><h4>{room.washer_dryer_in_unit ? <i className="material-icons green-color">check</i> : <i className="material-icons red-color">clear</i>}</h4>
            </li>
            <li className="info-item">
              <h4>Yard</h4><h4>{room.has_yard ? <i className="material-icons green-color">check</i> : <i className="material-icons red-color">clear</i>}</h4>
            </li>
          </ul>
        </section>
        <section className="profile">
          <Profile email={room.tenant}/>
        </section>
      </div>
    )
  }
}

export default RoomPage
