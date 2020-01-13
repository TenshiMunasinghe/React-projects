import React from "react";

function JokeComponents(props) {
	return (
		<div className='joke-component'>
			<p>{props.joke}</p>
		</div>
	);
}

export default JokeComponents;
