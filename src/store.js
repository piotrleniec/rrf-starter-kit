import { createStore } from 'redux'
import { applyMiddleware, compose } from 'redux'
import DevTools from './components/DevTools'
import reducers from './reducers'

export default createStore(
  reducers,
  compose(applyMiddleware(), DevTools.instrument())
)
