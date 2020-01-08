import React, {Component} from "react";

class TodoItem extends Component {
	state = {};
	style = {
		cursor: "pointer"
	};
	render() {
		const {text, id, handleEdit, handleDelete} = this.props;
		return (
			<li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
				<h6>{text}</h6>
				<div className='todo-icon'>
					<span
						className='mx-2 text-success'
						style={this.style}
						onClick={() => {
							handleEdit(text, id);
						}}>
						<i className='fas fa-pen'></i>
					</span>
					<span
						className='mx-2 text-danger'
						style={this.style}
						onClick={() => {
							let conf = window.confirm(
								"Do you really want to delete this item?"
							);
							handleDelete(id, conf);
						}}>
						<i className='fas fa-trash'></i>
					</span>
				</div>
			</li>
		);
	}
}

export default TodoItem;
