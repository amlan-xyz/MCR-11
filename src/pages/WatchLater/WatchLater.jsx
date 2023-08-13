import { useContext } from 'react'
import './style.css'
import { WatchLaterContext } from '../../index'
import { useNavigate } from 'react-router-dom';

export function WatchLater(){

	const {watchLater,removeFromWatchLater}=useContext(WatchLaterContext);

	const navigate=useNavigate();

	return(
		<section className='watch_later'>
			<header>{
				watchLater.length===0?<h2>
					No Movies found!!
				</h2>:'Watch Later'
			}</header>
			
			<ul className='card_list'>
				{
					watchLater.map(item=>{
						const {id,genre,title,rating,director,year,imageURL,summary}=item;
						return(

						<li className="card" key={id}>
						
						<div className="card_header">
							<img  className="card_img"  src={imageURL} alt="profile" />
						</div>

						<div className="card_body">
							<h3 onClick={()=>{
								navigate(`/movie/${id}`);
							}} className="card_title">{title}</h3>
							<div className="card_content">
								<p>{summary}</p>
								<div className="card_btns">
									<button className="btn_secondary" onClick={()=>{
										removeFromWatchLater(item);
									}}>Remove From Watch Later</button>
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