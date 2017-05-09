import React, { Component } from 'react';
import UserProfile from './user_profile';
import WineBottles from './wine_bottles';

export default class RowTwo extends React.Component {

  render() {
    return (
      <div className="row-two">
        <UserProfile/>
        <WineBottles userId={this.props.userId}/>
        {this.props.children}
      </div>
    );
  }
}