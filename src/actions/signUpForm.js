import firebase from 'firebase'

export const submitSignUpForm = (values, dispatch) => {
  firebase.auth()
          .createUserWithEmailAndPassword(values.email, values.password)
          .then( user => {
            console.log(user)
            //dispatch(push('/'))
          })
}
