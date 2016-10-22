import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import App from './containers/User/Login';
=======
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
>>>>>>> 63fe65340fded3338113d61312fcfea56673e750


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
      <div>
        <Match exactly pattern='/' component={Login} />
        <Match exactly pattern='/register' component={Register} />
        <Match exactly pattern='/get-started' component={GetStarted} />
        <Match exactly pattern='/profile' component={Profile} />
        <Match exactly pattern='/browse' component={Browse} />
        <Match exactly pattern='/404' component={NotFound} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('root'));
