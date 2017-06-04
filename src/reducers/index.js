import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import currentUser from './currentUser'
import messages from './messages'

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  fortyTwo: () => 'undefined',
  currentUser,
  messages
})
