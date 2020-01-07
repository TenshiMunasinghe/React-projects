import React, {Component} from "react";

class TodoItem extends Component {
	state = {};
	render() {
		const {text, id} = this.props;
		return (
			<li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
				<h6>{text}</h6>
				<div className='todo-icon'>
					<span
						className='mx-2 text-success'
						onClick={() => {
							this.props.handleEdit(text, id);
						}}>
						<i className='fas fa-pen'></i>
					</span>
					<span
						className='mx-2 text-danger'
						onClick={() => {
							let conf = window.confirm("Do you really want to delete this?");
							this.props.handleDelete(id, conf);
						}}>
						<i className='fas fa-trash'></i>
					</span>
				</div>
			</li>
		);
	}
}

export default TodoItem;
