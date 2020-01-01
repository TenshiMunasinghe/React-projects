import React, {Component} from "react";

class Conditional extends Component {
	componentDidMount() {
		setTimeout(() => {
			this.setState({isLoading: false});
		}, 1500);
	}

	render() {
		return (
			<div>
				<h1>loaded</h1>
			</div>
		);
	}
}

export default Conditional;
