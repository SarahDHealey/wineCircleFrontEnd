import React, { Component } from 'react';

import Navbar from './header';

class WelcomeLayout extends Component {
	render() {
		return(
			<div className="container">
				<div className="row">
					<Navbar />
				</div>

				{this.props.children}
			</div>
		);
	}
}

export default WelcomeLayout;