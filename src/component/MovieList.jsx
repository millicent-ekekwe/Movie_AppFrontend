import React, { useState } from 'react';
import '../App.css';

const MovieList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handlePosterClick = (movie) => {
    setSelectedMovie(selectedMovie === movie ? null : movie);
  };

  return (
    <div className='image-container'>
      {movies.map((movie, index) => (
        <div className={`movie-container ${selectedMovie === movie ? 'poster-clicked' : ''}`} key={movie.imdbID}>
          <img
            src={movie.Poster}
            alt='movie'
            onClick={() => handlePosterClick(movie)}
            className='movie-poster'
          />
          {selectedMovie === movie && (
            <div className='movie-details'>
              <p>Title: {movie.Title}</p>
              <p>Type: {movie.Type}</p>
              <p>Year: {movie.Year}</p>
              <p>ImdbID: {movie.imdbID}</p>
              {/* <p>IMDB Rating: {movie.imdbRating}</p> */}
              {/* Add other details as needed */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
