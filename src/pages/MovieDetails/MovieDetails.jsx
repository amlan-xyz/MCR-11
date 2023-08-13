import './style.css'

import { MoviesContext,WatchLaterContext } from '../../index'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { movies } from '../../data/movies';

export function MovieDetails(){

	const {movie,moviesData}=useContext(MoviesContext);
	const {watchLater,addToWatchLater,removeFromWatchLater}=useContext(WatchLaterContext);
	const {id}=useParams();


	const {genre,title,rating,director,year,imageURL,summary,writer,cast}=movie;

	useEffect(()=>{
		console.log(moviesData)
		console.log(movie);
	},[])

	return(
		<section className='movie_details'>
			
			<div className="movie_details_card">
				<img src={imageURL} alt="" className="movie_img" />
				<div className="movie_body">
					<h1>{title}</h1>
					<p className='details'>{summary}</p>
					<p>Year: {year}</p>
					<p>Genre: {genre.join(', ')}</p>
					<p>Rating: {rating} </p>
					<p>Director: {director}</p>
					<p>Writer: {writer}</p>
					<p>Cast :{cast.join(',')}</p>
					<div className="movie_btns">
					{
							watchLater.find(item=>item.title==movie.title)? <button className='btn_primary' onClick={()=>{
								removeFromWatchLater(movie);
							}}>Remove From Watch Later</button>:<button className='btn_primary' onClick={()=>{
								addToWatchLater(movie);
							}}>Add To Watch Later</button>
						}
					</div>
				</div>
			</div>

		</section>
	)
}