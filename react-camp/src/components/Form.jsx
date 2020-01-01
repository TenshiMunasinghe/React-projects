import React, {Component} from "react";
import FormComponent from "./FormComponent";

class Form extends Component {
	state = {
		firstName: "",
		lastName: "",
		age: "",
		gender: "",
		location: "Japan",
		dietary: {
			vegetarian: false,
			kosher: false,
			lactoseFree: false
		}
	};

	handleChange = e => {
		let {name, value, type, checked} = e.target;
		if (type === "checkbox" && name === "dietary") {
			this.setState(prev => {
				let dietary = {...prev.dietary};
				dietary[value] = checked;
				return {dietary};
			});
		} else if (type === "checkbox") {
			this.setState({[name]: checked});
		} else {
			this.setState({[name]: value});
		}
	};

	handleSubmit = e => {
		let stateArr = Object.values(this.state);
		if (!stateArr.includes("")) {
			const {firstName, lastName, age, gender, location, dietary} = this.state;
			let dietaryArr = Object.entries(dietary);
			let selectedDiet = dietaryArr.filter(e => {
				return e[1] === true;
			});
			let dietaryList = selectedDiet.map(e => ` ${e[0]}`);
			dietaryList.length === 0 && (dietaryList = "none");
			alert(
				`First Name: ${firstName}\nLast Name: ${lastName}\nAge: ${age}\nGender: ${gender}\nLocation: ${location}\nDietary Restrictions: ${dietaryList}`
			);
			e.preventDefault();
		}
		e.preventDefault();
	};

	render() {
		let dietaryArr = Object.entries(this.state.dietary);
		let selectedDiet = dietaryArr.filter(e => {
			return e[1] === true;
		});
		let dietaryList = selectedDiet.map((e, index) => {
			e[0] === "lactoseFree" && (e[0] = "lactose free");

			return index !== 0 ? `, ${e[0]}` : `${e[0]}`;
		});
		dietaryList.length === 0 && (dietaryList = "none");
		return (
			<FormComponent
				{...this.state}
				dietaryList={dietaryList}
				handleSubmit={this.handleSubmit}
				handleChange={this.handleChange}
			/>
		);
	}
}

export default Form;
