import React, { Component } from 'react'
import { Link } from 'react-router'
import './navbar.css'
import TransitionGroup from 'react-addons-css-transition-group'

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.toggleDrawer = this.toggleDrawer.bind(this)

    this.state = {
      drawerOpen: false
    }

  }

  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  render() {
    let Drawer

    if (this.state.drawerOpen) {
      Drawer = (
        <aside className="drawer">
          <Link onClick={this.toggleDrawer} to="/signin">Sign in</Link>
          <Link onClick={this.toggleDrawer} to="/signup">Sign up</Link>
          <Link onClick={this.toggleDrawer} to="/browse">Browse</Link>
          <Link onClick={this.toggleDrawer} to="/profile">Profile</Link>
        </aside>
      )
    }

    return (
      <header>
        <nav className="navbar">
          <h3>Roominate</h3>
          <button className="button" onClick={this.toggleDrawer}>
            <i className="material-icons">menu</i>
          </button>
        </nav>
        <TransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {Drawer}
        </TransitionGroup>
      </header>
    )
  }
}

export default NavBar
