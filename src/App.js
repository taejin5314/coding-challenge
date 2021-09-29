import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// components
import MovieList from './components/MovieList';

// hooks
import useApi from './hooks/useApi';
import NavBar from './components/NavBar';

// bring api key from .env file
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  // fetch api by using custom hook useApi
  const { loading, data } = useApi(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  const [likedMovies, setLikedMovies] = useState([])

  const addLikeMovie = (movie) => {
    setLikedMovies(prev => [...prev, movie])
  }

  const removeLikeMovie = (movie) => {
    setLikedMovies(prev => prev.filter(likedMovie => likedMovie.id !== movie.id))
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/liked'>
            <NavBar title={"Liked Movies"} />
            <div className="row">
              {data && <MovieList movies={likedMovies} handleLikeClick={addLikeMovie} handleRemove={removeLikeMovie} likedMovies={likedMovies} />}
            </div>
          </Route>
          <Route exact path='/'>
            <NavBar title={"Popular Movies"} />
            <div className="row">
              {data && <MovieList movies={data.results} handleLikeClick={addLikeMovie} handleRemove={removeLikeMovie} likedMovies={likedMovies} />}
            </div>
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
