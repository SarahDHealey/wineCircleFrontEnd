import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends React.Component {
  render() {
    return (
      <div className="main">

      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Main);
