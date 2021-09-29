import React from 'react';
import './MovieList.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

function MovieList({ movies, handleLikeClick, likedMovies, handleRemove }) {
  return (
    <>
      {movies.length ? movies.map((movie) => (
        <div className="movieList" >
          <img className="movieList-img" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie" />
          <div className="movieList-overlay">
            <span className="movieList-title">
              {movie.original_title}
            </span>
            {likedMovies.includes(movie)
              ? <FavoriteIcon onClick={() => handleRemove(movie)} style={{ cursor: "pointer", color: "red" }} />
              : <FavoriteBorderIcon onClick={() => handleLikeClick(movie)} style={{ cursor: "pointer" }} />
            }
          </div>
        </div>
      ))
        :
        <h2>There is no movie!</h2>
      }
    </>
  )
}

export default MovieList
