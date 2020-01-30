import React, { useState } from 'react'
import PropTypes from 'prop-types'

const EachShop = ({ shop }) =>{
	const [state, setState] = useState(0)
	const displayTag = ()=>{
		setState(1)
	}
	const hideTag =() =>{
		setState(0)
	}
	let shopTag = `We serve: ${shop.tags} ❤️`
	return (
		<div className = 'section' onMouseOver={displayTag} onMouseLeave={hideTag}>
			<h3 className='shop_name'>{shop.name}</h3>
			{state===1 &&
				<h3 className='shop_tag'>{shopTag}</h3>
			}
			<img className='image' src = {shop.image} alt = {shop.name}/>
		</div>
	)
}

EachShop.propTypes = {
	shop:PropTypes.object.isRequired,
}

export default EachShop
