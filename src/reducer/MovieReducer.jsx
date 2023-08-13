
export const MovieReducer=(acc,action)=>{
	switch(action.type){
		
		case 'filter_genre':
				return [...acc].filter(({genre})=>genre.some(item=>item.toLowerCase().includes(action.payload.toLowerCase())));
		case 'filter_by_year':
				return [...acc].filter(({year})=>year===Number(action.payload));
		case 'filter_by_rating':
			return [...acc].filter(({rating})=>rating===Number(action.payload))
		case 'search':
			return [...acc].filter(({title,director,cast})=>title.toLowerCase().includes(action.payload.toLowerCase()) || director.toLowerCase().includes(action.payload.toLowerCase()) || cast.some(item=>item.toLowerCase().includes((action.payload.toLowerCase()))));
		case 'reset':
			return [...action.payload];
		default:
			return acc;
	}
}