import React, {Component} from "react";
import Header from "./Header";
import Jokes from "./Jokes";

class App extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Header />
				<Jokes />
			</React.Fragment>
		);
	}
}

export default App;
