import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Print from './components/Print'
import Button from './components/Button'

let sortSate = 0;

const App = ()=> {
	const [ data, setData] = useState([]) 
	let sortFunction;
	// Function for sorting ascendingly:
	const sortShopA = () =>{
	sortSate= 1;
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
	// Function for sorting descendingly:
	const sortShopD = () =>{
		sortSate = 2;
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
	// getting the data from json server using axios:
	useEffect(()=>{
		axios
		  .get('http://localhost:3000/restaurants')
		  .then(response=>{
			setData(response.data)
		  })
	  }, [])
	// set sortFunction value to decide which sorting function to use:
	  if (sortSate === 0 || sortSate===2){
			sortFunction = sortShopA;
	  }else{
		   	sortFunction = sortShopD;
	  }
	  return (
		  <div className='app'>
			  <div className='buttonDiv'>
			  	<Button sort = {sortFunction} value ="Sort restaurants alphabetically" />
			  </div>
			  <div className='content'>
			  	<Print data = {data} />
			  </div>
		  </div>
	  )
}

export default App;
