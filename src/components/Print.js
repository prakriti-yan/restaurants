import React from 'react'
import EachShop from './EachShop'
import PropTypes from 'prop-types'

const Print =({ data }) =>{
	const showRestaurants = () => data.map(shop =>
		<EachShop key= {shop.location} shop = {shop} /> )
	return(
		<>
			{showRestaurants()}
		</>
	)
}

Print.propTypes = {
	data: PropTypes.array.isRequired,
}

export default Print