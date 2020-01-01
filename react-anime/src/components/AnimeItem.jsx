import React, {Component} from "react";

class AnimeItem extends Component {
	state = {};
	render() {
		const {title, public_url} = this.props.anime;
		return (
			<div className='anime'>
				<h3>{title}</h3>
				{public_url && (
					<a href={public_url} target='blank'>
						公式サイト
					</a>
				)}
			</div>
		);
	}
}

export default AnimeItem;
