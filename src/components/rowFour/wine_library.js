import React, { Component } from 'react';
var axios = require('axios');

export default class WineLibrary extends React.Component {

  render() {
    return (
			<div className="wine-library">
        axios
  .get("http://codepen.io/jobs.json")
  .then(function(result) {    
    // we got it!
  });
        <p>I'm the whole library</p>
			</div>
    );
  }
}