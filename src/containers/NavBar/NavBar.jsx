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

    let backBtn
    let title = 'Roominate'
    if (window.location.pathname.indexOf('/browse/') > -1) {
      backBtn = <Link to="/browse"><i className="material-icons">arrow_back</i></Link>
      title = 'Room'
    } else if (window.location.pathname === '/profile') {
      backBtn = <Link to="/browse"><i className="material-icons">arrow_back</i></Link>
      title = 'Profile'
    } else if (window.location.pathname === '/browse') {
      title = 'Browse'
    }

    let titleStyles = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }

    return (
      <div>
        <header>
          <nav className="navbar">
            {backBtn}
            <Link to="/browse" className="nav-title" style={backBtn ? titleStyles : {}}>{title}</Link>
            <button className="button" onClick={this.toggleDrawer}>
              <i className={`material-icons ${this.state.drawerOpen ? 'close' : ''}` }>{this.state.drawerOpen ? 'clear' : 'menu' }</i>
            </button>
          </nav>
          <TransitionGroup
            transitionName="drawer"
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
