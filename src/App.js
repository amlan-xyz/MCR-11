import './App.css';

import {Routes,Route} from 'react-router-dom'
import { Movies } from './pages/MovieListing/Movies';
import { Navbar } from './components/Navbar/Navbar';
import { Form } from './pages/NewMovie/Form';
import { WatchLater } from './pages/WatchLater/WatchLater';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Movies/>} />
        <Route path='/add-movie' element={<Form/>} />
        <Route path='/watch-later' element={<WatchLater/>} />
        <Route path='/movie/:id' element={<MovieDetails/>} /> 
      </Routes>
    </div>
  );
}

export default App;
