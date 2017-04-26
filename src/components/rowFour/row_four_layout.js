import React, { Component } from 'react';
import Following from './following_layout';
import RatedWineAll from './rated_wine_all';
import LocalBusinesses from './local_businesses';

export default class RowFour extends React.Component {

  render() {
    return (
      <div className="row-four">
        <Following/>
        <RatedWineAll/>
        <LocalBusinesses/>
        {this.props.children}
      </div>
    );
  }
}