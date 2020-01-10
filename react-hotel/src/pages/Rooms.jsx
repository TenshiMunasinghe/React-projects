import React, {Component} from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";

export default class Rooms extends Component {
	render() {
		return (
			<Hero hero='roomsHero'>
				<Banner title='Rooms'>
					<Link to='/' className='btn-primary'>
						Return Home
					</Link>
				</Banner>
			</Hero>
		);
	}
}
