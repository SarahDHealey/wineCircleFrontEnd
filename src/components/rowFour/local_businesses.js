import React, { Component } from 'react';

export default class LocalBusinesses extends React.Component {

  render() {
    return (
      <div className="local-businesses">
				<h4>Local Businesses</h4>
        {this.props.children}
      </div>
    );
  }
}