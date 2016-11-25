import { signinUser } from '../../actions';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label className="col-form-label">{label}</label>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type}/>
    {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)

let Signin = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div>
      <h1>Signin Form</h1>
      <form onSubmit={props.handleSubmit(props.signinUser)}>
        <div>
          <Field name="email" component={renderField} label="Email" type="email" className=""/>
        </div>
        <br />
        <div>
          <Field name="password" component={renderField} label="Password" type="text"/>
        </div>
        <br />
        <div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    appState: state
  };
}

const mapDispatchToProps = dispatch => ({
  signinUser({email, password}) {
    dispatch(signinUser({email, password}));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'loginForm',
  validate
})(Signin));
