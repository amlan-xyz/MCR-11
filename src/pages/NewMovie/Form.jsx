import { useContext, useState } from 'react'
import './style.css'
import { MoviesContext } from '../../context/MoviesContext';
import { useNavigate } from 'react-router-dom';



export function Form(){



	const [formData,setFormData]=useState({});

	const {addMovie,moviesData,dispatch}=useContext(MoviesContext)

	const navigate=useNavigate();

	const handleSubmit=(e)=>{
		e.preventDefault();
		const newMovie={
			id:moviesData.length+1,
			...formData,
		}
		addMovie(newMovie);
		dispatch({type:'reset',payload:moviesData});
		navigate('/')
	}


	return(
		<section>
			<header>Add new Movie</header>
			<form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" onChange={(e)=>setFormData(form=>({...form,title:e.target.value}))} name="title" id="title" />
  </div>
  <div class="form-group">
    <label for="year">Year</label>
    <input type="number" onChange={(e)=>setFormData(form=>({...form,year:Number(e.target.value)}))} class="form-control" name="year" id="year" />
  </div>
  <div class="form-group">
    <label for="genre">Genre</label>
    <input type="text" class="form-control" onChange={(e)=>setFormData(form=>({...form,genre:e.target.value}))} name="genre" id="genre" />
  </div>
  <div class="form-group">
    <label for="rating">Rating</label>
    <input type="number" onChange={(e)=>setFormData(form=>({...form,rating:Number(e.target.value)}))} class="form-control" name="rating" id="rating" />
  </div>
  <div class="form-group">
    <label for="director">Director</label>
    <input type="text" onChange={(e)=>setFormData(form=>({...form,director:e.target.value}))} class="form-control" name="director" id="director" />
  </div>
  <div class="form-group">
    <label for="writer">Writer</label>
    <input type="text" onChange={(e)=>setFormData(form=>({...form,writer:e.target.value}))} class="form-control" name="writer" id="writer" />
  </div>
  <div class="form-group">
    <label for="cast">Cast</label>
    <input type="text" onChange={(e)=>setFormData(form=>({...form,cast:e.target.value}))} class="form-control"  name="cast" id="cast" />
  </div>
  <div class="form-group">
    <label for="summary">Summary</label>
    <textarea class="form-control" onChange={(e)=>setFormData(form=>({...form,summary:e.target.value}))} name="summary" id="summary"></textarea>
  </div>
  <div class="form-group">
    <label for="image">Image</label>
    <input type="text" onChange={(e)=>setFormData(form=>({...form,imageUrl:e.target.value}))} class="form-control" name="image" id="image" />
  </div>
  <button type="submit" class="">Submit</button>
</form>

		</section>	
	)
}