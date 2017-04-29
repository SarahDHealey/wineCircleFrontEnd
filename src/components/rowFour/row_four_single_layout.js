import React, { Component } from 'react';
import Following from './following_layout';
import RatedWineAll from './rated_wine_all';
import LocalBusinesses from './local_businesses';
import WineSingle from './wine_single';

export default class RowFourSingle extends React.Component {

  render() {
    return (
      <div className="row-four">
        <Following/>
        <RatedWineAll>
          <WineSingle/>
        </RatedWineAll>
        <LocalBusinesses/>
        {this.props.children}
      </div>
    );
  }
}