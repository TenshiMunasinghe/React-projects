import React from "react";

function Product(props) {
	let {name, price, description} = props.productInfo;
	function alertPrice(price) {
		alert(
			`This item is ${price.toLocaleString("en-US", {
				style: "currency",
				currency: "USD"
			})}, it\`s ${price > 20 ? "expensive" : "cheap"}`
		);
	}
	return (
		<div className='product'>
			<h3>{name}</h3>
			<h4>
				{price.toLocaleString("en-US", {style: "currency", currency: "USD"})}
			</h4>
			<p>{description}</p>
			<button
				onClick={() => {
					alertPrice(price);
				}}>
				check this out
			</button>
		</div>
	);
}

export default Product;
