import $ from 'jquery'
import store from './store'

export const getRooms = () => {
  return new Promise((resolve, reject) => {
    store.rooms.isLoading = true
    $.ajax('http://a8509e9d.ngrok.io/roominate/rooms/').then((response) => {
      store.rooms.data = response
      store.addresses.isLoading = false
      $.ajax('http://a8509e9d.ngrok.io/roominate/address/').then((response) => {
        store.rooms.data = store.rooms.data.map((room) => {
          let newRoom = room
          let address = response.filter((addr) => {
            if (addr.id === room.address)
              return true
            else return false

          })[0]
          newRoom.address = address
          newRoom.location = {
            coordinates: [Number(address.latitude), Number(address.longitude)]
          }
          return newRoom
        })
        store.addresses.isLoading = false
        store.rooms.isLoading = false
        resolve(store.rooms.data)
      })
    })
  })
}

export const getUsers = (email) => {
  return new Promise((resolve, reject) => {
    $.ajax('http://a8509e9d.ngrok.io/roominate/profile/').then((response) => {
      store.profiles.data = response
      resolve(response)
    })
  })
}

export const getPreferences = (user) => {
  return new Promise((resolve, reject) => {
    if (user) {
      $.ajax('http://a8509e9d.ngrok.io/roominate/preferences/').then((response) => {
        store.preferences.data = response
        response.forEach((preference) => {
          if (preference.profile === user) {
            resolve(preference)
          }
        })
      })
    } else {
      $.ajax('http://a8509e9d.ngrok.io/roominate/pereferences/').then((response) => {
        store.preferences.data = response
        resolve(response)
      })
    }
  })
}
