import React from 'react';

import NavBar from './containers/NavBar/NavBar';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
// import $ from 'jquery'

import Login from './containers/User/Login';
import Register from './containers/User/Register';
import GetStarted from './containers/User/GetStarted';
import Profile from './containers/User/Profile';
import Browse from './containers/Browse/Browse';
import RoomPage from './containers/Browse/RoomPage';
import Preferences from './containers/User/Preferences';
import NotFound from './containers/NotFound/NotFound';
import store from './store'
import './styles/main.css'



// store.profiles.isLoading = true
// $.ajax('http://a8509e9d.ngrok.io/roominate/profile/').then((response) => {
//   store.profiles.data = response
//   store.profiles.isLoading = false
//   console.log(response)
// })
//
// store.addresses.isLoading = true
// $.ajax('http://a8509e9d.ngrok.io/roominate/address/').then((response) => {
//   store.addresses.data = response
//   store.addresses.isLoading = false
//   console.log(response)
// })
//
// store.preferences.isLoading = true
// $.ajax('http://a8509e9d.ngrok.io/roominate/preferences/').then((response) => {
//   store.preferences.data = response
//   store.preferences.isLoading = false
//   console.log(response)
// })

if (localStorage.email) {
  store.session.data = store.profiles.data.filter((profile) => {
    return (profile.email === localStorage.email) ? true : false
  })[0]
}

const Root = () => {
  return (
    <BrowserRouter>
      <NavBar>
        <Match exactly pattern='/' component={Login} />
        <Match exactly pattern='/register' component={Register} />
        <Match exactly pattern='/get-started' component={GetStarted} />
        <Match exactly pattern='/preferences' component={Preferences} />
        <Match exactly pattern='/profile' component={Profile} />
        <Match exactly pattern='/browse' component={Browse}/>
        <Match exactly pattern='/browse/:id' component={RoomPage}/>
        <Match exactly pattern='/404' component={NotFound} />
        <Miss component={NotFound} />
      </NavBar>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('root'));
