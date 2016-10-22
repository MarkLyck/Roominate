import React from 'react';
import NavBar from './containers/NavBar/NavBar';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import Login from './containers/User/Login';
import Register from './containers/User/Register';
import GetStarted from './containers/User/GetStarted';
import Profile from './containers/User/Profile';
import Browse from './containers/Browse/Browse';
import NotFound from './containers/NotFound/NotFound';

console.log('goodbye blue monday');

const Root = () => {
  return (
    <BrowserRouter>
      <NavBar>
        <Match exactly pattern='/' component={Login} />
        <Match exactly pattern='/register' component={Register} />
        <Match exactly pattern='/get-started' component={GetStarted} />
        <Match exactly pattern='/profile' component={Profile} />
        <Match exactly pattern='/browse' component={Browse} />
        <Match exactly pattern='/404' component={NotFound} />
        <Miss component={NotFound} />
      </NavBar>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('root'));
