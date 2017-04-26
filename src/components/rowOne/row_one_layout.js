import React, { Component } from 'react';

export default class RowOne extends React.Component {

  render() {
    return (
      <div className="row-one">
        {this.props.children}
      </div>
    );
  }
}