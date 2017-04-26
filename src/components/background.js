import React, { Component } from 'react';

export default class Background extends React.Component {

  render() {
    return (
      <div id="wine-profile">
        {this.props.children}
      </div>
    );
  }
}