import { SET_CURRENT_USER } from '../actionTypes'

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
})
