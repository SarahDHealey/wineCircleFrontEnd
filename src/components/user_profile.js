import React, { Component } from 'react';

export default class UserProfile extends React.Component {

  render() {
    return (
      <div className="user-profile">
        {this.props.children}
      </div>
    );
  }
}