import React from "react";

function JokeComponents(props) {
	const {joke} = props.data;
	return (
		<div id='joke-components'>
			<p>{joke}</p>
		</div>
	);
}

export default JokeComponents;
