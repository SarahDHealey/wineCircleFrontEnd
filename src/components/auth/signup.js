import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { signupUser } from '../../actions';
import { connect } from 'react-redux';

const validate = values => {
  const errors = {}
  console.log(values);
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Password is required'
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Password Confirmation is required'
  }
  if(values.password !== values.confirmPassword) {
    errors.password = 'Passwords must match';
  }
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type}/>
      {touched && error && <div  className="error">{error}</div>}
    </div>
  </div>
)

class Signup extends Component {
  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
  }
  renderAlert() {
    if (this.props.errorMessage) {
      console.log('errorhelper', this.props.errorMessage);
      return (
        <div className="alert alert-danger">
          <strong>Oops! </strong>{this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const {handleSubmit, email, password, confirmPassword } = this.props;

    return (
      <div>
        <label>Signup Form</label>
        <form onSubmit={this.props.handleSubmit(this.props.signupUser)}>
          <div>
            <fieldset className="form-group">
              <Field name="email" type="email" component={renderField} label="Email"/>
            </fieldset>
            <fieldset className="form-group">
              <Field name="password" type="password" component={renderField} label="Password"/>
            </fieldset>
            <fieldset className="form-group">
              <Field name="confirmPassword" type="password" component={renderField} label="ConfirmPassword"/>
            </fieldset>
            {this.renderAlert()}
            <button type="submit" className="btn btn-primary">submit</button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('in mapstate',state.auth);
  return {
    errorMessage: state.auth.error
  };
}

const mapDispatchToProps = dispatch => ({
  signupUser({email, password}) {
    dispatch(signupUser({email, password}));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'signupForm',
  validate
})(Signup));
