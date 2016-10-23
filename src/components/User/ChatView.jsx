import React from 'react'
import store from '../../store'
import './styles/chatView.css'

class ChatView extends React.Component {
  constructor(props) {
    super(props)

    this.renderMessages = this.renderMessages.bind(this)
    this.sendMessage = this.sendMessage.bind(this)

    this.state = {
      messages: []
    }
  }

  renderMessages() {
    return this.state.messages.map((message, i) => (
      <li key={i} className="message sender">
        <p>{message.body}</p>
      </li>
    ))
  }

  sendMessage(e) {
    e.preventDefault()
    let newMessages = this.state.messages
    newMessages.push({
      body: this.refs.message.value,
      timestamp: new Date(),
      sender: store.session.data.email
    })
    this.refs.message.value = ''
    this.setState({
      messages: newMessages
    })
  }

  render() {
    const profile = this.props.profile
    return (
      <form className="chat-container" onSubmit={this.sendMessage}>
        <header>
          <div className="profile-pic" style={{ backgroundImage: `url(${this.props.profile.image_url})`}} alt="profile"/>
          <h3 className="name">{profile.first_name} {profile.last_name.split('')[0]}.</h3>
        </header>

        <ul className="messages">
          {this.renderMessages()}
        </ul>

        <input className="message-field" type="text" placeholder="message" ref="message" />
      </form>
    )
  }
}

export default ChatView
