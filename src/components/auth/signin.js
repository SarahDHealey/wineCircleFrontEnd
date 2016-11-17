
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { signinUser } from '../../actions';
import axios from 'axios';
import { browserHistory } from 'react-router';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = { values: {} }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({
      values: {
        ...this.state.values,
        email: event.target.value
      }
    })
  }

  handlePasswordChange(event) {
    this.setState({
      values: {
        ...this.state.values,
        password: event.target.value
      }
    })
  }

// createPost is an Action Creator that creates a Promise as its payload
// whenever we call an Action Creator that creates a promise as its payload
// this call will return the same promise. When promise is resolved,
// then it means blog post was successfully created.

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.values);
    const request = axios.post('http://localhost:3090/signin', this.state.values).then(function(response) {
      alert("success");
      browserHistory.push('/');


    })
    .catch(function (error) {
    alert("fail");
      console.log(error);
    });
  }

  render() {
    return (
      // in handleSubmit we can pass an ActionCreator that will be called when form is
      // submitted and the form is valid

      <div className="contentContainer">
        <form onSubmit={this.handleSubmit}>
          <div className="mainSectionHeading">Login</div>

            <label>Email:</label>
            <input type="email" placeholder="email" className="form-control" value={this.state.values.email || ''} onChange={this.handleEmailChange}/>

            <label>Password:</label>
            <input type="text" placeholder="password" className="form-control" value={this.state.values.password || ''} onChange={this.handlePasswordChange} />

          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
    );
  }
}

// reduxForm is just like connect except it has an extra input
// connect: 1st argument is mapsStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: "signin", // does not have to match component name
  fields: ['email', 'password']
}, null, { signinUser })(Signin);
