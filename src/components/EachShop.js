import React, { useState } from 'react'
import PropTypes from 'prop-types'

const EachShop = ({ shop }) =>{
	const [displayState, setDisplayState] = useState(false)
	const displayTag = () => setDisplayState(true)
	const hideTag =() => setDisplayState(false)
	const shopTag = `We serve: ${shop.tags} ❤️`
	return (
		<div className = 'section' onMouseOver={displayTag} onMouseLeave={hideTag}>
			<h3 className='textInSection'>{shop.name}</h3>
			{displayState===true &&
				<h3 className='textInSection shop_tag'>{shopTag}</h3>
			}
			<img className='image' src = {shop.image} alt = {shop.name}/>
		</div>
	)
}

EachShop.propTypes = {
	shop:PropTypes.object.isRequired,
}

export default EachShop
