import React, { Component } from 'react';
import { connect } from 'react-redux';

class RowOne extends React.Component {
  render() {
    return (
      <div className="row-one">

      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(RowOne);