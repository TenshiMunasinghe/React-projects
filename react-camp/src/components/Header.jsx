import React, {Component} from "react";

class Header extends Component {
	state = {};
	render() {
		return (
			<header className='navbar'>
				<p>Welcome, {this.props.username}!</p>
			</header>
		);
	}
}

export default Header;
