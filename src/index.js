import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import DevTools from './components/DevTools'
import store from './store'
import App from './components/App'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default

    ReactDOM.render(
      <Provider store={store}>
        <div>
          <NextApp />
          <DevTools />
        </div>
      </Provider>,
      document.getElementById('root')
    )
  })
}
