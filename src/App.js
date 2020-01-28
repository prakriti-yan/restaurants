import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const Eachshop = (props) =>{
	const { shop } = props;
	return (
		<div className = 'section'>
			<h3 className='shop_name'>{shop.name} </h3>
			<img className='image' src = {shop.image} alt = {shop.name}/>
		</div>
	)
}

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
const Button = (props) =>{
	const { sort, value } = props;
	return (
		<div>
		<button  className='button' onClick={sort}>
			  {value}
		</button>
		</div>
	)
}
const firstButton = document.getElementsByClassName('button'); 

firstButton.onClick = ()=>{
	firstButton.style.visibility = "hidden";
}

const App = ()=> {

	const [ data, setData] = useState([]) 

	const sortShopA = (event) =>{
	// event.preventDefault();
	const newData = [...data];
	newData.sort((a, b) =>{
		const nameA = a.name.toUpperCase();
		const nameB = b.name.toUpperCase();
		if (nameA < nameB) {
			return -1;
		  }else if (nameA > nameB) {
			return 1;
		  }
		  return 0;
	})
	setData(newData);
	}

	const sortShopD = (event) =>{
		// event.preventDefault();
		const newData = [...data];
		newData.sort((a, b) =>{
			const nameA = a.name.toUpperCase();
			const nameB = b.name.toUpperCase();
			if (nameA < nameB) {
				return 1;
			  }else if (nameA > nameB) {
				return -1;
			  }
			  return 0;
		})
		setData(newData);
		}

	useEffect(()=>{
		axios
		  .get('http://localhost:3000/restaurants')
		  .then(response=>{
			setData(response.data)
		  })
	  }, [])

	  return (
		  <div className='app'>
			  <div className='buttonDiv'>
			  <Button sort = {sortShopA} value ="Sort restaurants alphabetically ascendingly" />
			  <Button sort = {sortShopD} value ="Sort restaurants alphabetically descendingly"/>
			  </div>
			  {/* <button className='button' onClick={sortShopA}>
			  Sort restaurants alphabetically
			  </button> */}
			  <div className='content'>
			  	<Print data = {data} />
			  </div>
		  </div>
	  )
}

export default App;
