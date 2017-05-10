import React from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'

const App = ({ answer }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      The answer is <strong>{answer}</strong>.
    </p>
  </div>
)

const mapStateToProps = state => ({
  answer: state.fortyTwo
})

export default connect(mapStateToProps)(App)
