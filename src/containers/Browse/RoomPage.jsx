import React, { Component } from 'react'
import store from '../../store'
import './styles/roomPage.css'
import Profile from '../User/Profile'

class RoomPage extends Component {
  constructor(props) {
    super(props)

    const room = store.rooms.data.filter((room) => {
      if (props.params.id === room.id)
        return true
      else
        return false
    })

    this.state = {
      room: room[0]
    }
  }


  render() {
    const room = this.state.room
    return (
      <div className="room-page">
        <div className="slider">
          <div className="room-image" style={{ backgroundImage: `url(${room.image})`}}/>
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
          <Profile/>
        </section>
      </div>
    )
  }
}

export default RoomPage
