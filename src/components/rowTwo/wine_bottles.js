import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router';
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
    this.mediaHandler()
  }

  mediaHandler() {
    console.log('userId', this.props.userId)
    axios.get('http://www.localhost:3090/wine_profile/{userId}', {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then((res) => {
      const wines = res.data.wines;
      this.setState({ wines })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  mediaPrinter(array) {
  return array.map(function(wine) {
    const image = wine.wine_bottle_img;
    console.log(wine.wine_bottle_img)
    return <img
      className="bottle-img"
      key={wine.id}
      src={image}
      width="50" 
      height= "148" />
    })
  }

  render() {
    // console.log('image url', this.state.wines)
    // console.log('this is the feed for wine_bottles ', this.props.userId);

    // const { params } = this.props;
    // const { userId } = this.props.userId
    return (
      <div className="wine-bottles">
        <div>
          {this.mediaPrinter(this.state.wines)}
        </div>
      {this.props.message}
      </div>   
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default withRouter(connect(mapStateToProps, actions)(WineBottles));