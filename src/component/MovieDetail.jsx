// MovieDetails.js
import React from 'react';

const MovieDetail = ({ movie, onClose }) => {
    //console.log('Movie Details:', movie);
  return (
    <div className="movie-details">
      <button className="close-btn" onClick={onClose}>Close</button>
      <div>
        <h2>{movie.Title}</h2>
        <p>Rated: {movie.Rated}</p>
        <p>Released: {movie.Released}</p>
        <p>Runtime: {movie.Runtime}</p>
        <p>Director: {movie.Director}</p>
        <p>IMDB Rating: {movie.imdbRating}</p>
        {/* Add other details as needed */}
      </div>
    </div>
  );
};

export default MovieDetail;
