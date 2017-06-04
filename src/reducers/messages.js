import { SET_MESSAGES } from '../actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return action.messages
    default:
      return state
  }
}
