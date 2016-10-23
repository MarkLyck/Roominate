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
      rooms: store.rooms.data,
      center: {lat: 30.2672, lng: -97.7431}
    }
  }

  componentDidMount() {
    // this.setState({ center: {lat: 56.26392000000001, lng: 9.50178500000004} })
  }

  handleMapMounted(map) {
    this._map = map
  }

  handlePlacesChanged() {
    const places = this._searchBox.getPlaces()
    console.log(this._map)

    if (places.length) {
      const lat = places[0].geometry.location.lat()
      const lng = places[0].geometry.location.lng()
      this.setState({ center: {lat: lat, lng: lng} })
      // this._map.setCenter({lat: lat, lng: lng})
    }
    // this.setState({ center: {lat: 56.26392000000001, lng: 9.50178500000004} })
  }

  handleSearchBoxMounted(searchBox) {
    this._searchBox = searchBox
  }

  render() {
    console.log(this.state.center)
    let rooms = store.rooms.data.map((room, i) => {
      return (<RoomItem room={room} key={i} />)
    })
    return (
      <div className="browse">
        <GoogleMapsWrapper
          containerElement={ <div className="map-container" style={{ height: '100%' }} /> }
          mapElement={ <div style={{ height: '100%' }} /> }
          center={this.state.center}
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
