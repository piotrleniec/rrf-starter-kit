import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import DevTools from './components/DevTools'
import store from './store'
import Routes from './components/Routes'
import initializeFirebase from './firebase'
import './index.css'

initializeFirebase()

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Routes />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./components/Routes', () => {
    const NextRoutes = require('./components/Routes').default

    ReactDOM.render(
      <Provider store={store}>
        <div>
          <NextRoutes />
          <DevTools />
        </div>
      </Provider>,
      document.getElementById('root')
    )
  })
}
