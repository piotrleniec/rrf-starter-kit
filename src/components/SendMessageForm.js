import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { submitSendMessageForm } from '../actions/sendMessageForm'

const SendMessageForm = props => (
  <form className="panel-body" onSubmit={props.handleSubmit}>
    <div className="form-group">
      <label>
        Message:
      </label>
      <Field name="message" component="input" type="textarea" className="form-control" />
    </div>
    <button className="btn btn-primary">Send Message</button>
  </form>
)

export default reduxForm({
  form: 'sendMessageForm',
  onSubmit: (values, dispatch) => {
    dispatch(submitSendMessageForm(values.message))
  }
})(SendMessageForm)
