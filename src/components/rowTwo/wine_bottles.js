import React, { Component } from 'react';

export default class WineBottles extends React.Component {

  render() {
    return (
      <div className="wine-bottles"><p>here is where we are going to pull all of the images from the database...</p>
        {this.props.children}
      </div>
    );
  }
}