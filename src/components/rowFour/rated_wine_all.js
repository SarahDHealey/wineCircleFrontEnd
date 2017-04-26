import React, { Component } from 'react';

export default class RatedWineAll extends React.Component {

  render() {
    return (
      <div className="rated-wine-all">
				<h1>Your rated wine</h1>
        {this.props.children}
      </div>
    );
  }
}