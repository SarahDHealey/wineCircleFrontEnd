import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './header';
import Main from './main';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Main />
        {this.props.children}
      </div>
    );
  }
}
