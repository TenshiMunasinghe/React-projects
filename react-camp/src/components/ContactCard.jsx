import React from "react";

function ContactCard(props) {
	const {name, imgUrl, phone, email} = props.contact;
	return (
		<div className='contact-card'>
			<img src={imgUrl} alt='' />
			<h3>{name}</h3>
			<p>Phone: {phone}</p>
			<p>Email: {email}</p>
		</div>
	);
}

export default ContactCard;
