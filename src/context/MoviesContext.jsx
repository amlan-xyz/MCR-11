import { createContext, useEffect, useReducer, useState } from "react";

import {movies} from '../data/movies'

import { MovieReducer } from "../reducer/MovieReducer";

export const MoviesContext=createContext();

export function MoviesContextProvider({children}){

	const [moviesData,setMoviesData]=useState([]);
	const [genres,setGenres]=useState([]);
	const [years,setYears]=useState([]);
	const [ratings,setRatings]=useState([])
	const [movie,setMovie]=useState([]);


	const [state,dispatch]=useReducer(MovieReducer,movies);

	const getMovies=()=>{
		setMoviesData(movies);
	}

	const getGenre = () => {
		setGenres(movies.reduce((acc, curr) => {
			curr.genre.forEach(genre => {
				if (!acc.includes(genre)) {
					acc.push(genre);
				}
			});
			return acc;
		}, []));
	}

	const getYear=()=>{
		const data=movies.reduce((acc,curr)=>{
			if(!acc.includes(curr.year)){
				acc.push(curr.year);
			}
			return acc;

		},[])

		setYears(data.sort((a,b)=>a-b))
	}

	const getRatings=()=>{
		const data=movies.reduce((acc,curr)=>{
			if(!acc.includes(curr.rating)){
				acc.push(curr.rating);
			}
			return acc;

		},[])

		setRatings(data.sort((a,b)=>a-b))
	}


	const getMovie=(movie_id)=>{
		setMovie(moviesData.find(({id})=>id===Number(movie_id)));
	}

	useEffect(()=>{
		getMovies();
	},[])

	const value={moviesData,getMovies,state,dispatch,getGenre,genres,getYear,years,getRatings,ratings,setMoviesData,movie,getMovie};

	return(
		<MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>	
	)
}