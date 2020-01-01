import React, {Component} from "react";

class Greeting extends Component {
	state = {};
	render() {
		const date = new Date();
		const hours = date.getHours();
		let timeOfDay;
		if (hours < 12) {
			timeOfDay = "Morning";
		} else if (hours >= 12 && hours < 17) {
			timeOfDay = "afternoon";
		} else {
			timeOfDay = "night";
		}
		return <p>Good {timeOfDay} to you!</p>;
	}
}

export default Greeting;
