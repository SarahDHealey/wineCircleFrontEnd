

import React, { Component } from 'react';

export default class Welcome extends React.Component {

  render() {
    return (
      <div id="welcome">
        <div>
        <h1>Welcome to Pour Notes</h1>
        <h3>Where you can keep track of your favorite wines.</h3>
        <button type="button" className="btn btn-primary splashBtn">Browse Wines
        </button>
        </div>
      </div>
    );
  }
}


