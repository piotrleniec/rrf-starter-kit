import React from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import logo from './logo.svg'
import './App.css'
import SignOutButton from './SignOutButton'
import { setCurrentUser } from '../actions/currentUser'
import SendMessageForm from './SendMessageForm'
import Messages from './Messages'

class App extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(!user) {
        this.props.setCurrentUser(null)
        return
      }

      this.props.setCurrentUser({
        id: user.uid,
        email: user.email
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          The answer is <strong>{this.props.answer}</strong>.
        </p>
        <SignOutButton />

        <div className="App-send-message-form">
          <div className="container">
            <div className="column">
            <Messages />
            </div>
            <SendMessageForm />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  answer: state.fortyTwo
})

const mapDispatchToProps = {
  setCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
