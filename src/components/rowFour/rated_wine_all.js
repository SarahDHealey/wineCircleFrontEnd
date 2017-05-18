import React, { Component } from 'react';

export default class RatedWineAll extends React.Component {

  render() {
    return (
      <div className="rated-wine-all">
				<h4>Your wine notes</h4>
        {this.props.children}
      </div>
    );
  }
}