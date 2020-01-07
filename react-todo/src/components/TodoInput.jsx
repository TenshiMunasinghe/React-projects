import React, {Component} from "react";

class TodoInput extends Component {
	state = {
		input: ""
	};

	handleChange = e => {
		let {value} = e.target;
		this.setState({input: value});
	};

	render() {
		return (
			<div className='card card-body my3'>
				<form
					onSubmit={e => {
						e.preventDefault();
						this.props.handleSubmit(this.state.input);
						this.setState({input: ""});
					}}>
					<div className='input-group'>
						<div className='input-group-prepend'>
							<div className='input-group-text bg-primary text-white'>
								<i className='fas fa-book'></i>
							</div>
						</div>
						<input
							type='text'
							className='form-control text-capitalize'
							placeholder='add a todo item'
							onChange={this.handleChange}
							value={this.state.input}
						/>
					</div>
					<button type='submit' className='btn btn-block btn-primary mt-3'>
						add item
					</button>
				</form>
			</div>
		);
	}
}

export default TodoInput;
