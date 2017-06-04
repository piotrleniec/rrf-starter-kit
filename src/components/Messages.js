import React from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { setMessages } from '../actions/messages'

class Messages extends React.Component {
  componentDidMount() {
    firebase.database().ref('messages').on('value', snapshot => {
      const messages = Object.values(snapshot.val())
      this.props.setMessages(messages)
    })
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        { this.props.messages.map(message => (
          <p className="text-danger">{message.currentUser.email}: {message.text}</p>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.messages
})

const mapDispatchToProps = {
  setMessages
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
