import { useContext } from 'react'
import './style.css'
import { WatchLaterContext } from '../../index'

export function WatchLater(){

	const {watchLater,removeFromWatchLater}=useContext(WatchLaterContext)

	return(
		<section>
			<header>Watch Later</header>
			<ul>
				{
					watchLater.map(item=>(
						<li key={item.id}>{item.title}
						<button onClick={()=>{
							removeFromWatchLater(item);
						}}>Remove</button>
						</li>	
					))
				}
			</ul>
		</section>	
	)
}