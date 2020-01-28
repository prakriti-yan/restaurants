import React from 'react';

const Button = (props) =>{
	const { sort, value } = props;
	return (
		<>
			<button  className='button' onClick={sort}>
			  {value}
			</button>
		</>
	)
}

export default Button;