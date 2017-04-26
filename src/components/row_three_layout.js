import React, { Component } from 'react';

export default class RowThree extends React.Component {

  render() {
    return (
      <div className="row-three">
                <h1>Be the change</h1>
        {this.props.children}
      </div>
    );
  }
}