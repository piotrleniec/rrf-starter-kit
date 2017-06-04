import React from 'react'
import firebase from 'firebase'

const signOut = () => {
  firebase.auth().signOut()
}

const SignOutButton = props => (
  <button onClick={signOut} className="btn btn-danger">
    Sign Out
  </button>
)

export default SignOutButton
