import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './header';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
