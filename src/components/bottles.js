import React, { Component } from 'react';
import { Link } from 'react-router';
import ProfileLayout from './profile_layout';
import WineProfile from './wine_profile'

export default class Bottles extends React.Component {

  render() {
    return (
      <div>
        <ProfileLayout>
					<WineProfile />
				</ProfileLayout>
        {this.props.children}
      </div>
    );
  }
}