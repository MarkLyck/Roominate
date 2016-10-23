import React from 'react'
import { Link } from 'react-router'
import './styles/roomItem.css'

const RoomItem = ({ room }) => (
  <Link to={`/browse/${room.id}`} className="room-item">
    <img src={room.image} alt="room" />
    <div className="content">
      <h3 className="price">${room.monthly_rent} /m</h3>
      <p className="description">{room.description}</p>
    </div>
  </Link>
)

export default RoomItem
