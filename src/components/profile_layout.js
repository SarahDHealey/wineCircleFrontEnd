import React, { Component } from 'react';

class ProfileLayout extends Component {
	render() {
		return(
			<div id="profile-layout">
				{this.props.children}
			</div>
		);
	}
}

export default ProfileLayout