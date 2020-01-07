import React, {Component} from "react";

class TodoItem extends Component {
	state = {};
	render() {
		return (
			<li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
				<h6>{this.props.text}</h6>
				<div className='todo-icon'>
					<span className='mx-2 text-success'>
						<i className='fas fa-pen'></i>
					</span>
					<span className='mx-2 text-danger'>
						<i className='fas fa-trash'></i>
					</span>
				</div>
			</li>
		);
	}
}

export default TodoItem;