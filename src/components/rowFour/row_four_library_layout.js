import React, { Component } from 'react';
import Following from './following_layout';
import RatedWineAll from './rated_wine_all';
import WineLibrary from './wine_library';
import LocalBusinesses from './local_businesses';

export default class RowFourLibrary extends React.Component {

  render() {
    return (
      <div className="row-four">
        <Following/>
        <RatedWineAll>
          <WineLibrary/>
        </RatedWineAll>
        <LocalBusinesses/>
        {this.props.children}
      </div>
    );
  }
}