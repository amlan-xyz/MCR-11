import { NavLink } from "react-router-dom"
import {useContext, useEffect, useState } from "react"

import './style.css'
import { MoviesContext } from "../../context/MoviesContext";

export function Navbar(){
	
	const {dispatch,moviesData}=useContext(MoviesContext);
	
	const [search,setSearch]=useState('');
	
	const handleSearch=()=>{
		dispatch({type:'search',payload:search,initial:moviesData});
	}

	useEffect(()=>{
		handleSearch();
	},[search]);

	return(
		<nav>
			<header className="nav_header">AMDB</header>
			<input type="search" onChange={(e)=>{
				setSearch(e.target.value)
			}} placeholder="Search"/>
			<ul>
				<li ><NavLink className="nav_link"  to='/'>Movies</NavLink> </li>
				<li ><NavLink className="nav_link" to='/watch-later'>Watch List</NavLink></li>
				<li ><NavLink className="nav_link" to='/stared-movies'>Stared</NavLink></li>
			</ul>
		</nav>	
	)
}