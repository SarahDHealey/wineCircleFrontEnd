import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Background from './background';
import RowOne from './rowOne/row_one_layout';
import RowTwo from './rowTwo/row_two_layout';
import RowFourSingle from './rowFour/row_four_single_layout';


class WineProfileSingle extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>
        <Background>
          <RowOne/>
          <RowTwo/>
          <RowFourSingle/>
        </Background>
      {this.props.message}
      </div>   
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(WineProfileSingle);