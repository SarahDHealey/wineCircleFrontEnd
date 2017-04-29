import React, { Component } from 'react';

export default class RatedWineAll extends React.Component {

  render() {
    return (
      <div className="rated-wine-all">
				<h1>This is the photo grid and then when you click it, it will be the details pages.</h1>
        {this.props.children}
      </div>
    );
  }
}