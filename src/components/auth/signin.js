import { signinUser } from '../../actions';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Email is required'
  }
  if (!values.password) {
    errors.password = 'Password is required'
  }
  return errors
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type}/>
    {touched && (error && <div className="error"> {error}</div>)}
    </div>
  </div>
)

let Signin = (props) => {
  const { handleSubmit } = props

  return (
    <div>
      <label>Signin Form</label>
      <form onSubmit={props.handleSubmit(props.signinUser)}>
        <div>
          <fieldset className="form-group">
            <Field name="email" component={renderField} label="Email" type="email" className=""/>
          </fieldset>
          <fieldset className="form-group">
            <Field name="password" component={renderField} label="Password" type="password"/>
          </fieldset>
          <fieldset>
            <button type="submit" className="btn btn-primary">submit</button>
          </fieldset>
        </div>
      </form>
    </div>
  )
}

function mapStateToProps(state) {
  console.log(state.auth.error);
  return {
    errorMessage: state.auth.error
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
