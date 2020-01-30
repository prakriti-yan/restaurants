import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ sort, value }) =>{
	return (
		<button  className='button' onClick={sort}>
			{value}
		</button>
	)
}

Button.propTypes = {
	sort: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
}

export default Button