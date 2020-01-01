import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import "./stylesTodo.css";
import "./styles.css";

// function App() {
// 	let styles = {
// 		fontSize: "2vw"
// 	};

// 	const d = new Date();
// 	const hours = d.getHours();
// 	let time;
// 	if (hours < 12) {
// 		time = "morning";
// 		styles.color = "red";
// 	} else if (hours >= 12 && hours < 17) {
// 		time = "after noon";
// 		styles.color = "orange";
// 	} else {
// 		time = "night";
// 		styles.color = "blue";
// 	}

// 	return <h1 style={styles}>Good {time}</h1>;
// }

ReactDOM.render(<App />, document.getElementById("root"));
