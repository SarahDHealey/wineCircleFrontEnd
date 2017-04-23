import { signinUser } from '../../actions';
import React, { Component, PropTypes } from 'react';
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
      {touched && error && <div className="error"> {error}</div>}
    </div>
  </div>
)

class Signin extends Component {
  handleFormSubmit(formProps) {
    this.props.signinUser(formProps);
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
    const {handleSubmit, email, password } = this.props;

    return (
      <div className="container rounded" id="welcome">
        <label>Signin Form</label>
        <form onSubmit={this.props.handleSubmit(this.props.signinUser)}>
          <div>
            <fieldset className="form-group">
              <Field name="email" component={renderField} label="Email" type="email"/>
            </fieldset>
            <fieldset className="form-group">
              <Field name="password" component={renderField} label="Password" type="password"/>
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
  // console.log('error from state signin', state.auth.error);
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
