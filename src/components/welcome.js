// import React from 'react';

// export default () => <div id="welcome"></div>

import React, { Component } from 'react';
import WelcomeBackground from './welcome_background';

export default class Welcome extends React.Component {

  render() {
    return (
      <WelcomeBackground>
        <div id="welcome">
          <div>
          <h2>Welcome to Pour Notes</h2>
          <h4>Where you can keep track of your favorite wines.</h4>
          <button type="button" className="btn btn-primary splashBtn">Browse Wines
          </button>
          </div>
        </div>
        </WelcomeBackground>
    );
  }
}


