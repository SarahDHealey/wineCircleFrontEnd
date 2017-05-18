import React, { Component } from 'react';
var axios = require('axios');

export default class WineLibrary extends React.Component {

  render() {
    var wineNotes = this.props.wineNotes
    return (<div>
      {wineNotes.map(wine =>
        <p key={wine.id}>{wine.note_text}</p>
      )}
    </div>);
  }
}

WineLibrary.propTypes = {
  wineNotes: React.PropTypes.array.isRequired
};
