import { useContext, useEffect } from "react"

import {MoviesContext, WatchLaterContext} from '../../index'
import { Filter } from "../../components/Filter/Filter";
import { Link, useNavigate } from "react-router-dom";

import './style.css'

export function Movies(){

	const {getMovies,state,getMovie}=useContext(MoviesContext);
	const {watchLater,addToWatchLater,removeFromWatchLater}=useContext(WatchLaterContext);

	const navigate=useNavigate();

	useEffect(()=>{
		getMovies();
	},[]);

	return(
		<section className="layout">
			<Filter/>
			<ul className="card_list">
				{
					state.map(item=>{
						const {id,genre,title,rating,director,year,imageURL,summary}=item;
						return(
						<li className="card" key={id}>
						
						<div className="card_header">
							<img  className="card_img"  src={imageURL} alt="profile" />
						</div>

						<div className="card_body">
							<h3 onClick={()=>{
								navigate(`/movie/${id}`);
								getMovie(id);
							}} className="card_title">{title}</h3>
							<div className="card_content">
								<p>{summary}</p>
								<div className="card_btns">
								{
									watchLater.find(item=>item.title==title)? <button className="btn_secondary" onClick={()=>{
										removeFromWatchLater(item);
									}}>Remove From Watch Later</button>:<button className="btn_secondary" onClick={()=>{
										addToWatchLater(item);
									}}>Add To Watch Later</button>
								}
								</div>
							</div>
						</div>
						
						</li>	
					)})
				}
			</ul>
		</section>	
	)
}