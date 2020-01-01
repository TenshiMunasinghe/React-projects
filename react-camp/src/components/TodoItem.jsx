import React from "react";

function TodoItem(props) {
	let {text, completed} = props.todoItem;
	return (
		<div className='todo-item'>
			<input
				type='checkbox'
				checked={completed}
				onChange={props.handleChange}
			/>
			<p className={completed && "completed"}>{text}</p>
		</div>
	);
}

export default TodoItem;
