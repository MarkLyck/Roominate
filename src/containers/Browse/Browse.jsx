import React, { Component } from 'react'
import store from '../../store.js'
import GoogleMapsWrapper from '../../components/Map/Wrapper'
import RoomItem from '../../components/Room/RoomItem'
import './styles/browse.css'

class Browse extends Component {
  constructor(props) {
    super(props)

    this.handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this)
    this.handlePlacesChanged = this.handlePlacesChanged.bind(this)
    this.handleMapMounted = this.handleMapMounted.bind(this)

    this.state = {
      rooms: store.rooms.data
    }
  }

  handleMapMounted(map) {
    console.log('mounting map')
    this._map = map
  }

  handlePlacesChanged(places) {
    console.log(places)
    // this.setState({ mapCener:  })
  }

  handleSearchBoxMounted(searchBox) {
    console.log('mounting box');
    this._searchBox = searchBox
  }

  render() {
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
          onPlacesChanged={this.handlePlacesChanged}
          onMapMounted={this.handleMapMounted}
          onSearchBoxMounted={this.handleSearchBoxMounted}
          />
        <ul>
          {rooms}
        </ul>

      </div>
      )
  }
}

export default Browse
