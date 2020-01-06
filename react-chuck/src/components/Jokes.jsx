import React, {Component} from "react";
import JokeComponents from "./JokeComponents";

class Jokes extends Component {
	state = {
		joke: []
	};

	componentDidMount = async () => {
		this.generateJoke();
	};

	getJokes = async () => {
		let response = await fetch("https://api.chucknorris.io/jokes/random");
		return response.json();
	};

	generateJoke = async () => {
		let data = await this.getJokes();
		let jokeText = data.value;
		this.setState(prev => {
			let joke = [...prev.joke];
			joke[joke.length] = jokeText;
			return {joke};
		});
	};

	render() {
		return (
			<React.Fragment>
				<ul>
					{this.state.joke.map((joke, i) => {
						return <JokeComponents key={i} joke={joke} />;
					})}
				</ul>
				<button onClick={this.generateJoke}>Generate Joke</button>
			</React.Fragment>
		);
	}
}

export default Jokes;
