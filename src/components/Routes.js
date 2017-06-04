import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import history from '../history'
import App from './App'
import signUpForm from './SignUpForm'
import sendMessageForm from './SendMessageForm'

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/sign-up" component={signUpForm} />
    </Switch>
  </ConnectedRouter>
)

export default Routes
