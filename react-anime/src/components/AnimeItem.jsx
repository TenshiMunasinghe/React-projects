import React from "react";

function AnimeItem() {
	const {title, public_url} = props.anime;
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

export default AnimeItem;
