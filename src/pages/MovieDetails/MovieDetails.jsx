import './style.css'

import { MoviesContext,WatchLaterContext } from '../../index'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export function MovieDetails(){

	const {getMovie,movie}=useContext(MoviesContext);
	const {watchLater,addToWatchLater,removeFromWatchLater}=useContext(WatchLaterContext);


	const {id}=useParams();

	useEffect(()=>{
		getMovie(Number(id));
	},[])

	return(
		<section>
			{movie && movie.title}

			{
							watchLater.find(item=>item.title==movie.title)? <button onClick={()=>{
								removeFromWatchLater(movie);
							}}>Remove From Watch Later</button>:<button onClick={()=>{
								addToWatchLater(movie);
							}}>Add To Watch Later</button>
						}

		</section>
	)
}