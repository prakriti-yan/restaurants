import React from 'react';

const Eachshop = (props) =>{
	const { shop } = props;
	return (
		<div className = 'section'>
			<h3 className='shop_name'>{shop.name} </h3>
			<img className='image' src = {shop.image} alt = {shop.name}/>
		</div>
	)
}

export default Eachshop;