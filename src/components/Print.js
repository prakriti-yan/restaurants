import React from 'react'
import EachShop from './EachShop'

const Print =(props) =>{
	const { data } = props
	const showRestaurants = () => data.map(shop =>
		<EachShop key= {shop.location} shop = {shop} /> )
	return(
		<>
			{showRestaurants()}
		</>
	)
}

export default Print