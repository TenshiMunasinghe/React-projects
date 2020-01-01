import React, {Component} from "react";
import JokeComponents from "./JokeComponents";

class Jokes extends Component {
	state = {
		joke: ""
	};
	componentDidMount = async () => {
		let data = await this.getJokes();
		let joke = data.value;
		this.setState({joke});
	};

	getJokes = async () => {
		let response = await fetch("https://api.chucknorris.io/jokes/random");
		return response.json();
	};

	render() {
		return (
			<React.Fragment>
				<JokeComponents data={this.state} />
			</React.Fragment>
		);
	}
}

export default Jokes;
