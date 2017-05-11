import firebase from 'firebase'
import config from './config'
import initializeHooks from './hooks'

export default () => {
  firebase.initializeApp(config)
  initializeHooks()
}
