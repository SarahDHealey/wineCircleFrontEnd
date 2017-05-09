import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Background from './background';
import RowOne from './rowOne/row_one_layout';
import RowTwo from './rowTwo/row_two_layout';
import RowFourLibrary from './rowFour/row_four_library_layout';


class WineProfileAll extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    const { params } = this.props;
    const { userId } = params
    return (
      <div>
        <Background>
          <RowOne>
            <p>Hi User Number ({userId})</p>
          </RowOne>
          <RowTwo userId={userId}/>
          <RowFourLibrary/>
        </Background>
      {this.props.message}
      </div>   
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(WineProfileAll);