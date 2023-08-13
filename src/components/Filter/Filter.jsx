import { useContext, useEffect } from 'react'
import './style.css'
import { MoviesContext } from '../../index'
import { Link } from 'react-router-dom'



export function Filter(){

	const {moviesData,genres,getGenre,dispatch,years,getYear,ratings,getRatings}=useContext(MoviesContext)

	const getDetails=()=>{
		getGenre();
		getYear();
		getRatings();
	}

	const handleGenre=(e)=>{
		dispatch({type:'filter_genre',payload:e.target.value,initial:moviesData});
	}

	const handleYear=(e)=>{
		dispatch({type:'filter_by_year',payload:e.target.value,initial:moviesData});
	}

	const handleRating=(e)=>{
		dispatch({type:'filter_by_rating',payload:e.target.value});
	}

	const handleReset=()=>{
		dispatch({type:'reset',payload:moviesData});
	}

	useEffect(()=>{
		getDetails();
	},[]);

	return(
		<div className="filter">
			<header className='filter_header'>Movies</header>

			<select onChange={handleGenre} id="">
				<option value="">All genre</option>
				{
					genres.map(item=>(
						<option value={item}>{item}</option>	
					))
				}
			</select>
			<select onChange={handleYear} id="">
				<option  value="">Release Year</option>
				{
					years.map(item=>(
						<option value={item}>{item}</option>	
					))
				}
			</select>
			<select onChange={handleRating} name="" id="">
				<option value="">
					Rating
				</option>
				{
					ratings.map(item=>(
						<option value={item}>{item}</option>	
					))
				}
			</select>

			<button className='btn_primary' onClick={handleReset}>Reset</button>
			<Link className='btn_primary' to='/add-movie'>Add a Movie</Link>
		</div>	
	)
}