import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';

class WineBottles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wines: []
    };
  }
  componentWillMount() {
    this.props.fetchMessage();
  }

  componentDidMount() {
    axios.get('http://www.localhost:3090/wine_profile/1', {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(res => {
      const wines = res.data.wines;
      this.setState({ wines });
    })
  }

  render() {
    // const { params } = this.props;
    // const { userId } = params
    return (
      <div className="wine-bottles">
        <ul>
          {this.state.wines.map(wine => <li key={wine.id}>{wine.wine_name}</li>)}
        </ul>
      {this.props.message}
      </div>   
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(WineBottles);