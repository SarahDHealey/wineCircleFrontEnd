import React, { Component } from 'react';

class ProfileLayout extends Component {
	render() {
		return(
			<div className="container">
				{this.props.children}
			</div>
		);
	}
}

export default ProfileLayout