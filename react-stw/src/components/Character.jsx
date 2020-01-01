import React from "react";

function Character(props) {
	let {name, height, mass, gender} = props.character;
	console.log(props.character);
	return (
		<div className='anime'>
			<h3>{name}</h3>
			<p>Gender: {gender}</p>
			<p>Height: {height === "unknown" ? height : `${height}cm`}</p>
			<p>Mass: {mass === "unknown" ? mass : `${mass}kg`}</p>
		</div>
	);
}

export default Character;
