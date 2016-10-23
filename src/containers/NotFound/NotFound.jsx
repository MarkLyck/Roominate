import React from 'react';
import { Link } from 'react-router';
import './styles/not-found.css';

class NotFound extends React.Component {
  render() {
    return (
      <div id="not-found">
        <h1>Something went terribly wrong.</h1>
        <p>The page &quot;{location.pathname}&quot; does not exist. <Link to="/browse">Get back to safety!</Link></p>
      </div>
    );
  }
}

export default NotFound;
