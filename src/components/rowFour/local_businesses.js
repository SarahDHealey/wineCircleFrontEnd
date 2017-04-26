import React, { Component } from 'react';

export default class LocalBusinesses extends React.Component {

  render() {
    return (
      <div className="local-businesses">
				<h1>Local Businesses</h1>
        {this.props.children}
      </div>
    );
  }
}