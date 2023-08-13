import { useContext, useEffect } from "react"

import {MoviesContext, WatchLaterContext} from '../../index'
import { Filter } from "../../components/Filter/Filter";
import { Link } from "react-router-dom";
export function Movies(){

	const {getMovies,state}=useContext(MoviesContext);
	const {watchLater,addToWatchLater,removeFromWatchLater}=useContext(WatchLaterContext);

	useEffect(()=>{
		getMovies();
	},[]);

	return(
		<section className="layout">
			<Filter/>
			<ul>
				{
					state.map(item=>{
						const {id,genre,title,rating,director,year}=item;
						return(
						<li key={id}>{title} | {genre.join(', ')} | {year} | {director} | {rating} 
						
						{
							watchLater.find(item=>item.title==title)? <button onClick={()=>{
								removeFromWatchLater(item);
							}}>Remove From Watch Later</button>:<button onClick={()=>{
								addToWatchLater(item);
							}}>Add To Watch Later</button>
						}

						
						<Link to={`/movie/${id}`}>View</Link>
						
						</li>	
					)})
				}
			</ul>
		</section>	
	)
}