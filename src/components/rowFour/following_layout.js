import React, { Component } from 'react';

export default class Following extends React.Component {

  render() {
    return (
      <div className="following">
				<h1>Your wine circle</h1>
        {this.props.children}
      </div>
    );
  }
}