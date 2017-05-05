import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import WelcomeBackground from '../welcome_background';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <WelcomeBackground>
        <div className="container">
          <div id="signout"><h3>You are now logged out.</h3></div>
        </div>
      </WelcomeBackground>
    )
  }
}

export default connect(null, actions)(Signout);
