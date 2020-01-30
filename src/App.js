import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Print from './components/Print'
import Button from './components/Button'

// sortState is to record the sorting state:
// null means the page is rendered and no button was clicked
// Asc means the page is now ascendingly sorted
// Desc means the page is now descendingly sorted
let sortState = null

const App = () => {
	const [data, setData] = useState([])
	let button

	// Sorting method:
	const sortMethod = (order) => {
		let n
		sortState = order
		const newData = [...data]
		newData.sort((a, b) => {
			const nameA = a.name.toUpperCase()
			const nameB = b.name.toUpperCase()
			if (nameA < nameB) {
				(order === 'Asc') ? n = -1 : n = 1
				return n
			} else if (nameA > nameB) {
				(order === 'Asc') ? n = 1 : n = -1
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

	// Create button with different sorting fuction based on sortState:
	if (sortState === null || sortState === 'Desc') {
		button = <Button
					sort={() => sortMethod('Asc')} 
					value={'Sort restaurants alphabetically ⇧'}
				 />
	} else {
		button = <Button 
					sort={() => sortMethod('Desc')} 
					value={'Sort restaurants alphabetically ⇩'} 
				 />
	}
	return (
		<div className='app'>
			<h2 className='header'>Food lovers</h2>
			<div className='buttonDiv'>
				{button}
			</div>
			<div className='content'>
				<Print data={data} />
			</div>
		</div>
	)
}

export default App
