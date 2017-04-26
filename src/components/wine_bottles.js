import React, { Component } from 'react';

export default class WineBottles extends React.Component {

  render() {
    return (
      <div className="wine-bottles">
        {this.props.children}
      </div>
    );
  }
}