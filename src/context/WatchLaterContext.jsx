import { createContext, useState} from "react";

export const WatchLaterContext=createContext();

export function WatchLaterContextProvider({children}){

	const [watchLater,setWatchLater]=useState([]);

	const addToWatchLater=(item)=>{
		setWatchLater(watchLater=>[...watchLater,item]);
	}

	const removeFromWatchLater=(item)=>{
		setWatchLater(watchLater.filter(({id})=>id!==item.id))
	}

	const value={watchLater,addToWatchLater,removeFromWatchLater};

	return(
		<WatchLaterContext.Provider value={value}>{children}</WatchLaterContext.Provider>	
	)
}