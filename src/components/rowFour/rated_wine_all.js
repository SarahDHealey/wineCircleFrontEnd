import React, { Component } from 'react';

export default class RatedWineAll extends React.Component {

  render() {
    return (
      <div className="rated-wine-all">
				<h4>This is the photo grid and then when you click it, it will be the details pages.</h4>
        {this.props.children}
      </div>
    );
  }
}