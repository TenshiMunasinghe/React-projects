import React from "react";
// import MainContent from "./MainContent";
// import Footer from "./Footer";
// import Header from "./Header";
// import Greeting from "./Greeting";
// import TodoItem from "./TodoItem";
// import todoData from "./todoData";
// import ContactCard from "./ContactCard";
// import Joke from "./Joke";
// import jokesData from "./jokesData";
// import Product from "./Product";
// import products from "./products";
// import Conditional from "./Conditional";
import Form from "./Form";

// function App() {
// 	return (
// 		<div>
// 			<ContactCard
// 				contact={{
// 					name: "Mr. Whiskerson",
// 					imgUrl: "http://placekitten.com/300/300",
// 					phone: "(212) 555-1234",
// 					email: "whiskerson@catnap.meow"
// 				}}
// 			/>
// 			<ContactCard
// 				contact={{
// 					name: "Mr. Whiskerson",
// 					imgUrl: "http://placekitten.com/400/400",
// 					phone: "(212) 444-1234",
// 					email: "whiskerson@catnap.meow"
// 				}}
// 			/>
// 			<ContactCard
// 				contact={{
// 					name: "Mr. Whiskerson",
// 					imgUrl: "http://placekitten.com/750/750",
// 					phone: "(212) 333-1234",
// 					email: "whiskerson@catnap.meow"
// 				}}
// 			/>
// 			<ContactCard
// 				contact={{
// 					name: "Mr. Whiskerson",
// 					imgUrl: "http://placekitten.com/600/600",
// 					phone: "(212) 222-1234",
// 					email: "whiskerson@catnap.meow"
// 				}}
// 			/>
// 		</div>
// 	);
// }

// function App() {
// 	return (
// 		<div className='flex'>
// 			{jokesData.map(e => {
// 				return <Joke key={e.id} joke={e} />;
// 			})}
// 		</div>
// 	);
// }

// class App extends Component {
// 	state = {
// 		todoData: todoData
// 	};

// 	handleChange = id => {
// 		this.setState(prev => {
// 			const todoData = prev.todoData.map(e => {
// 				e.id === id && (e.completed = !e.completed);
// 				return e;
// 			});
// 			return {todoData};
// 		});
// 	};

// 	render() {
// 		return (
// 			<div className='flex'>
// 				{this.state.todoData.map(e => (
// 					<TodoItem
// 						key={e.id}
// 						todoItem={e}
// 						handleChange={() => {
// 							this.handleChange(e.id);
// 						}}
// 					/>
// 				))}
// 			</div>
// 		);
// 	}
// }

// class App extends Component {
// 	state = {};
// 	render() {
// 		return (
// 			<div>
// 				<Header username='John' />
// 				<Greeting />
// 			</div>
// 		);
// 	}
// }

// class App extends Component {
// 	state = {
// 		isLoggedIn: false
// 	};
// 	render() {
// 		return (
// 			<div>
// 				<h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
// 			</div>
// 		);
// 	}
// }

// class App extends Component {
// 	state = {
// 		count: 0
// 	};

// 	handleIncrement = () => this.setState({count: this.state.count + 1});

// 	handleDouble = () => this.setState({count: this.state.count * 2});

// 	handleHalf = () => this.setState({count: this.state.count / 2});

// 	render() {
// 		return (
// 			<div>
// 				<h1>{this.state.count}</h1>
// 				<button onClick={this.handleIncrement}>Increment!</button>
// 				<button onClick={this.handleDouble}>Double!</button>
// 				<button onClick={this.handleHalf}>Half!</button>
// 			</div>
// 		);
// 	}
// }

// class App extends Component {
// 	state = {
// 		isLoggedIn: false
// 	};

// 	logInOrLogOut = () => {
// 		this.setState(prev => {
// 			return {isLoggedIn: !prev.isLoggedIn};
// 		});
// 	};

// 	render() {
// 		return (
// 			<div className='flex'>
// 				<h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
// 				<button onClick={this.logInOrLogOut}>
// 					Log {this.state.isLoggedIn ? "out" : "in"}
// 				</button>
// 			</div>
// 		);
// 	}
// }

function App() {
	return <Form />;
}

export default App;
