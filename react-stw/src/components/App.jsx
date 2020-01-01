import React, {Component} from "react";
import Character from "./Character";

class App extends Component {
	state = {
		isLoading: false,
		characters: []
	};

	componentDidMount() {
		this.setState({isLoading: true});
		this.getCharacters()
			.then(resp => {
				let characters = [].concat(...resp);
				return characters;
			})
			.then(characters => this.setState({characters, isLoading: false}))
			.catch(err => console.error(err));
	}

	async getCharacters() {
		let characters = [];
		let response = await fetch(`https://swapi.co/api/people/`);
		let json = await response.json();
		await characters.push(json.results);
		let next = json.next;

		while (next) {
			response = await fetch(next);
			json = await response.json();
			await characters.push();
			next = json.next;
		}
		return characters;
	}

	render() {
		let {isLoading, characters} = this.state;
		let content;
		if (isLoading) {
			content = <h1>Loading...</h1>;
		} else {
			content = (
				<React.Fragment>
					<h2>star wars characters</h2>
					<ul>
						{characters.map((character, index) => {
							return <Character key={index} character={character} />;
						})}
					</ul>
				</React.Fragment>
			);
		}

		return <div className='flex'>{content}</div>;
	}
}

export default App;
