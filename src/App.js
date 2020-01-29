import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Print from './components/Print'
import Button from './components/Button'

let sortState = 0

const App = () => {
	const [data, setData] = useState([])
	let sortFunction
	let buttonText
	// Function for sorting restaurants based on name ascendingly:
	const sortAsc = () => {
		sortState = 1
		const newData = [...data]
		newData.sort((a, b) => {
			const nameA = a.name.toUpperCase()
			const nameB = b.name.toUpperCase()
			if (nameA < nameB) {
				return -1
			} else if (nameA > nameB) {
				return 1
			}
			return 0
		})
		setData(newData)
	}
	// Function for sorting restaurants based on name descendingly:
	const sortDesc = () => {
		sortState = 2
		const newData = [...data]
		newData.sort((a, b) => {
			const nameA = a.name.toUpperCase()
			const nameB = b.name.toUpperCase()
			if (nameA < nameB) {
				return 1
			} else if (nameA > nameB) {
				return -1
			}
			return 0
		})
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
		sortFunction = sortAsc
		buttonText='Sort restaurants alphabetically ⇧'

	} else {
		sortFunction = sortDesc
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
