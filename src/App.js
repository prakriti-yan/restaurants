import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Print from './components/Print'
import Button from './components/Button'

// sortState is to record the sorting state:0 means the page is rendered and no button was clicked
// 											1 means the page is now ascendingly sorted
// 											2 means the page is now descendingly sorted
let sortState = 0

const App = () => {
	const [data, setData] = useState([])
	let sortFunction
	let buttonText

	// sorting method:
	const sortMethod = (order) => {
		let n
		(order === 'Ascending') ? sortState = 1 : sortState = 2 
		const newData = [...data]
		newData.sort((a, b) => {
			const nameA = a.name.toUpperCase()
			const nameB = b.name.toUpperCase()
			if (nameA < nameB) {
				(order === 'Ascending') ? n = -1 : n = 1
				return n
			} else if (nameA > nameB) {
				(order === 'Ascending') ? n = 1 : n = -1
				return n}	
			return 0}
		)
		setData(newData)
	}
	
	// getting the data from json server using axios:
	useEffect(() => {
		axios
			.get('http://localhost:3000/restaurants')
			.then(response => {
				setData(response.data)
			})
	}, [])

	// pass sortFunction value to based on sortState:
	if (sortState === 0 || sortState === 2) {
		sortFunction = () => sortMethod('Ascending')
		buttonText='Sort restaurants alphabetically ⇧'

	} else {
		sortFunction = () => sortMethod('Descending')
		buttonText='Sort restaurants alphabetically ⇩'
	}
	return (
		<div className='app'>
			<h2 className='header'>Food lovers</h2>
			<div className='buttonDiv'>
				<Button sort={sortFunction} value={buttonText} />
			</div>
			<div className='content'>
				<Print data={data} />
			</div>
		</div>
	)
}

export default App
