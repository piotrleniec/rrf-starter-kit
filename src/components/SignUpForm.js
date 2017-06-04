import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { submitSignUpForm } from'../actions/signUpForm'

const SignUpForm = props => (
  <div className="container">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h5>SignUp Form</h5>
      </div>
      <form className="panel-body" onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label>
            Email:
          </label>
          <Field name="email" component="input" type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label>
            Password:
          </label>
          <Field name="password" component="input" type="password" className="form-control" />
        </div>
        <br />
        <button className="btn btn-primary">Sign up</button>
      </form>
    </div>
  </div>
)

export default reduxForm({
  form: 'signUpForm',
  onSubmit: submitSignUpForm
})(SignUpForm)
