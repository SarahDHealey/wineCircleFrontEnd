import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';

class Signin extends Component {

  handleFormSubmit({email, password}) {
    console.log(email, password);
  }

  render() {
    const {fields: {email, password}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div>
          <label>First Name</label>
          <div>
            <Field name="email" component="input" type="email" placeholder="Email"/>
          </div>
        </div>
        <div>
          <label>First Name</label>
          <div>
            <Field name="password" component="input" type="text" placeholder="Password"/>
          </div>
        </div>
        <div>
        <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

// Decorate the form component
export default reduxForm({
  form: 'signin', // a unique name for this form
  fields: ['email', 'password']
})(Signin);
