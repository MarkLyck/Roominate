import React from 'react'
import PlaceMarker from './Marker'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import SearchBox from 'react-google-maps/lib/places/SearchBox'
import Redirect from 'react-router/Redirect'

class GoogleMapsWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.clickedMap = this.clickedMap.bind(this)
    this.clickedMarker = this.clickedMarker.bind(this)

    this.state = {
      selectedRoom: { },
      showInfo: false,
    }
  }

  clickedMap() {
    if (this.state.showInfo)
      this.setState({ showInfo: false })
  }

  clickedMarker(room) {
    this.setState({
      showRoom: true,
      selectedRoom: room
    })
  }

  renderMarkers(rooms) {
    if (!rooms)
      return undefined
    return rooms.map((room, i) =>
      <PlaceMarker key={i} room={room}
        handleClick={this.clickedMarker} />
    )
  }

  render() {
    if (this.state.showRoom)
      return <Redirect to={`/browse/${this.state.selectedRoom._id}`}/>

    // Styles must be inline to work with react-google-maps
    const SEARCHBOX_STYLE = {
      width: 'calc(100% - 32px)',
      marginTop: '16px',
      padding: '16px',
      boxSizing: 'border-box',
      zIndex: '1',
      MozBoxSizing: 'border-box',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
      fontSize: '14px',
      textOverflow: 'ellipses',
      border: 'none',
      borderRadius: '0',
    }

    return <GoogleMap
        ref={this.props.onMapMounted}
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center}
        center={this.props.center}
        mapTypeControl={false}
        onClick={this.clickedMap}
        options={{
          mapTypeControl: false,
          streetViewControl: false
        }}>

        <SearchBox
          ref={this.props.onSearchBoxMounted}
          inputPlaceholder="Search"
          inputStyle={SEARCHBOX_STYLE}
          controlPosition={2}
          onPlacesChanged={this.props.onPlacesChanged}
          />

        {this.renderMarkers(this.props.rooms)}

      </GoogleMap>
  }
}

export default withGoogleMap(GoogleMapsWrapper)
