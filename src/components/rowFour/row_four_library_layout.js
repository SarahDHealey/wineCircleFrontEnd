import React, { Component } from 'react';
import Following from './following_layout';
import RatedWineAll from './rated_wine_all';
import WineLibrary from './wine_library';
import LocalBusinesses from './local_businesses';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router';
import axios from 'axios';

class RowFourLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wine_notes: [],
      userId: 0
    };
  }
  componentWillMount() {
    this.props.fetchMessage();
  }

  componentDidMount() {
    this.mediaHandler()
  }

  mediaHandler() {
    var userId = this.props.userId;
    this.setState({userId})
    var BASE_URL = 'http://www.localhost:3090/wine_profile/';
    axios.get(BASE_URL + userId, {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then((res) => {
      const wine_notes = res.data.wine_notes;
      const wines = res.data.wines;
      this.setState({ wine_notes })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="row-four">
        <Following/>
        <RatedWineAll>
          <WineLibrary wineNotes={this.state.wine_notes}>
          </WineLibrary>
        </RatedWineAll>
        <LocalBusinesses/>
        {this.props.children}
        {this.props.message}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default withRouter(connect(mapStateToProps, actions)(RowFourLibrary));