import React, { Component } from 'react';

export default class Following extends React.Component {

  render() {
    return (
      <div className="following">
				{/*<h4>Your wine circle</h4>*/}
        {this.props.children}
      </div>
    );
  }
}