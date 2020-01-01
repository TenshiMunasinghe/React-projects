import React from "react";
function Joke(props) {
	let {question, punchLine} = props.joke;
	return (
		<div className='joke'>
			{question && <p>Question: {question}</p>}
			<h3 style={{color: !question && "#a1a1a1"}}>{punchLine}</h3>
		</div>
	);
}

export default Joke;
