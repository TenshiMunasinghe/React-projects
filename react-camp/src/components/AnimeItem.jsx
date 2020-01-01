import React, {Component} from "react";

class AnimeItem extends Component {
	state = {};
	render() {
		const {title} = this.props.anime;
		return (
			<div className='anime'>
				<h3>{title}</h3>
			</div>
		);
	}
}

export default AnimeItem;
