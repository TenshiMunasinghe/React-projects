import React, {Component} from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
	handleReset = () => {
		this.setState({list: []});
	};

	render() {
		return (
			<ul className='list-group my-5'>
				<h3 className='text-capitalize text-center'>todo list</h3>
				{this.props.list.map((e, i) => {
					return (
						<TodoItem
							key={i}
							id={i}
							text={e}
							handleEdit={this.props.handleEdit}
							handleDelete={this.props.handleDelete}
						/>
					);
				})}
				<button
					type='button'
					className='btn btn-danger btn-block text-capitalize mt-5'
					onClick={this.props.handleReset}>
					clear list
				</button>
			</ul>
		);
	}
}

export default TodoList;
