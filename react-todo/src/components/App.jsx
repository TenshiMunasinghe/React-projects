import React, {Component} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class App extends Component {
	state = {
		list: []
	};

	handleSubmit = input => {
		this.setState(prev => {
			let list = [...prev.list];
			list[list.length] = input;
			return {list};
		});
	};

	handleReset = () => {
		this.setState({list: []});
	};

	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-10 mx-auto col-md-8 mt-4'>
						<h3 className='text-capitalize text-center'>todo input</h3>
						<TodoInput handleSubmit={this.handleSubmit} />
						<TodoList list={this.state.list} handleReset={this.handleReset} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
