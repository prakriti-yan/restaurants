import React, { useState } from 'react'

const EachShop = (props) =>{
	// let click = 0;
	const [click, setClick] = useState(0)
	
	const { shop } = props
	const display = ()=>{
		setClick(1)
	}
	let show
	if (click === 0){
		show = shop.name
	}else if (click === 1){
		show = `We serve: ${shop.tags} ❤️`
	}
	return (
		<div className = 'section' onClick={display} >
			<h3 className='shop_name'>{shop.name}</h3>
			{click===1 &&
				<h3 className='shop_tag'>{show}</h3>
			}
			<img className='image' src = {shop.image} alt = {shop.name}/>
		</div>
	)
}

export default EachShop