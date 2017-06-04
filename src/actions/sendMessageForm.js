import firebase from 'firebase'

export const submitSendMessageForm = text => (dispatch, getState) => {
  const { currentUser } = getState()
  firebase.database().ref('messages').push({
    text,
    currentUser
  })
  console.log("Sending message")
}
