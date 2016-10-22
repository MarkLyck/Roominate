import React from 'react'
import { Marker } from 'react-google-maps'
import pin from '../../../public/images/Pinsmall.png'

class PlaceMarker extends React.Component {
  constructor(props) {
    super(props)

    this.renderMarkers = this.renderMarkers.bind(this)
  }

  // Render markers for the map
  renderMarkers(rooms) {
    // console.log(google)
    return rooms.map((room, i) => <Marker
        key={i}
        position={{lat: room.location.coordinates[0], lng: room.location.coordinates[1]}}
        icon={pin}
        // size={new google.maps.Size(20, 32)}
        size={{
          f:'px',
          height: 32,
          j: 'px',
          width: 20
        }}
        onClick={this.props.handleClick.bind(null, room)}
        />)
  }

  render() {
    return (
      <div>
        {this.renderMarkers([this.props.room])}
        {/* {this.renderLabels([this.props.room])} */}
      </div>
    )
  }
}

export default PlaceMarker
