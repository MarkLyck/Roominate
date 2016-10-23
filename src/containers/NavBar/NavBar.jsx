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
          <Link onClick={this.toggleDrawer} to="/">Sign in</Link>
          <Link onClick={this.toggleDrawer} to="/register">Sign up</Link>
          <Link onClick={this.toggleDrawer} to="/browse">Browse</Link>
          <Link onClick={this.toggleDrawer} to="/profile">Profile</Link>
        </aside>
      )
    }

    return (
      <div>
        <header>
          <nav className="navbar">
            <Link to="/browse" className="nav-title">Roominate</Link>
            <button className="button" onClick={this.toggleDrawer}>
              <i className="material-icons">{this.state.drawerOpen ? 'clear' : 'menu' }</i>
            </button>
          </nav>
          <TransitionGroup
            transitionName="example"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={200}>
            {Drawer}
          </TransitionGroup>
        </header>
        <main className="main-container">
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default NavBar
