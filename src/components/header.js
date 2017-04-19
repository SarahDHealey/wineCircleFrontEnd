import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends React.Component {
  renderLinks() {
    if (this.props.authenticated) {
      return <button type="button" className="btn btn-default navbar-btn">
        <Link className="nav-link" to="/signout">Sign Out</Link>
      </button>
    } else {
      return [
        <button type="button" className="btn btn-default btn-xs navbar-btn" key={1}>
          <Link className="nav-link" to="/signin">Signin</Link>
        </button>,
        <button type="button" className="btn btn-default btn-xs navbar-btn" key={2}>
        <Link className="nav-link" to="/signup">Signup</Link>
        </button>


      ]
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">PourNotes</a>
          <div className="navbar-right">
            {this.renderLinks()}
          </div>
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
