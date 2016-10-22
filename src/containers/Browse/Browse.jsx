import React, { Component } from 'react'
import store from '../../store.js'
import GoogleMapsWrapper from '../../components/Map/Wrapper'
import RoomItem from '../../components/Room/RoomItem'
import './styles/browse.css'

class Browse extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rooms: store.rooms.data
    }
  }

  render() {
    console.log(this.state)
    let rooms = store.rooms.data.map((room, i) => {
      return (<RoomItem room={room} key={i} />)
    })
    return (
      <div className="browse">
        <GoogleMapsWrapper
          containerElement={ <div className="map-container" style={{ height: '100%' }} /> }
          mapElement={ <div style={{ height: '100%' }} /> }
          center={[30.2672, -97.7431]}
          rooms={this.state.rooms}
          zoom={10}
          />
        <ul>
          {rooms}
        </ul>

      </div>
      )
  }
}

export default Browse
