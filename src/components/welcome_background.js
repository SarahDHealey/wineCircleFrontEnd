import React, { Component } from 'react';

export default class Background extends React.Component {

  render() {
    return (
      <div id="welcome-background">
        {this.props.children}
      </div>
    );
  }
}