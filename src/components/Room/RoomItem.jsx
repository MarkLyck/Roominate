import React from 'react'
import { Link } from 'react-router'
import './styles/roomItem.css'

const RoomItem = ({ room }) => (
  <Link to={`/browse/${room._id}`} className="room-item">
    <img src={room.imageURL} alt="room" />
    <div className="content">
      <h3 className="price">${room.price} /m</h3>
      <p className="description">{room.description}</p>
    </div>
  </Link>
)

export default RoomItem
