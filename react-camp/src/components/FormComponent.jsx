import React from "react";

function FormComponent(props) {
	const {firstName, lastName, age, gender, location, dietary} = props;

	return (
		<React.Fragment>
			<h1>Travel Form</h1>
			<form action='' onSubmit={props.handleSubmit}>
				<div className='formElement'>
					<label>First Name</label>
					<input
						type='text'
						name='firstName'
						value={firstName}
						onChange={props.handleChange}
					/>
				</div>

				<div className='formElement'>
					<label>Last Name</label>
					<input
						type='text'
						name='lastName'
						value={lastName}
						onChange={props.handleChange}
					/>
				</div>

				<div className='formElement'>
					<label>Age</label>
					<input
						type='number'
						name='age'
						min='0'
						max='150'
						value={age}
						onChange={props.handleChange}
					/>
				</div>

				<div className='formElement'>
					<label>Gender</label>
					<span>Male</span>
					<input
						type='radio'
						name='gender'
						value='male'
						checked={gender === "male"}
						onChange={props.handleChange}
					/>

					<span>Female</span>
					<input
						type='radio'
						name='gender'
						value='female'
						checked={gender === "female"}
						onChange={props.handleChange}
					/>
				</div>

				<div className='formElement fullWidth'>
					<label>Location</label>
					<select
						name='location'
						value={location}
						onChange={props.handleChange}>
						<option value='Japan'>Japan</option>
						<option value='Sri lanka'>Sri lanka</option>
						<option value='England'>England</option>
					</select>
				</div>

				<div className='formElement fullWidth'>
					<label>Dietary restrictions</label>
					<span>Vegetarian</span>
					<input
						type='checkbox'
						name='dietary'
						value='vegetarian'
						checked={dietary.vegetarian}
						onChange={props.handleChange}
					/>
					<span>Kosher</span>
					<input
						type='checkbox'
						name='dietary'
						value='kosher'
						checked={dietary.kosher}
						onChange={props.handleChange}
					/>
					<span>Lactose Free</span>
					<input
						type='checkbox'
						name='dietary'
						value='lactoseFree'
						checked={dietary.lactoseFree}
						onChange={props.handleChange}
					/>
				</div>

				<div className='formElement'>
					<input type='submit' value='submit' />
				</div>
			</form>

			<div>
				<p>
					{firstName} {lastName}
				</p>
				<p>{age}</p>
				<p>{gender}</p>
				<p>{location}</p>
				<p>{props.dietaryList}</p>
			</div>
		</React.Fragment>
	);
}

export default FormComponent;
