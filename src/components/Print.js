import React from 'react';
import Eachshop from './Eachshop'

const Print =(props) =>{
	const { data } = props;
	const row = () => data.map(shop =>
		<Eachshop key= {shop.location} shop = {shop} /> )
		return(
		<>
			{row()}
		</>
	)
}

export default Print;