import React, { Component } from 'react'
import store from '../../store'
import './styles/roomPage.css'

class RoomPage extends Component {
  constructor(props) {
    super(props)

    const room = store.rooms.data.filter((room) => {
      if (props.params.id === room._id)
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
          <div className="room-image" style={{ backgroundImage: `url(${room.imageURL})`}}/>
        </div>
        <section className="content">
          <h3 className="title">{room.title}</h3>
          <p className="description">{room.description}</p>

        </section>
      </div>
    )
  }
}

export default RoomPage
