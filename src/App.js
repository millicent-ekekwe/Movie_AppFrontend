import React, { useState, useEffect, useRef } from 'react';
import MovieList from './component/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';
import MovieDetail from './component/MovieDetail';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [latestSearches, setLatestSearches] = useState([]);
  const movieListRef = useRef(null); // Create a ref for MovieList

  useEffect(() => {
    // Fetch latest searches from the backend API
    const fetchLatestSearches = async () => {
      try {
        const searchResponse = await axios.get('https://localhost:7057/api/LatestSearch/get-latest-searches');
        setLatestSearches(searchResponse.data);
      } catch (error) {
        console.error('Error fetching latest searches:', error);
      }
    };

    fetchLatestSearches();
  }, []);

  const handleSearch = async () => {
    if (!query.trim()) {
      // If search query is empty or contains only whitespace, return early
      return;
    }

    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=a978fa94&s=${query}`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      }
      // Scroll to the MovieList section
      if (movieListRef.current) {
        movieListRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <form onSubmit={handleSubmit}>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for a movie..."
                className="search-input"
                value={query}
                onChange={handleChange}
              />
              <button className="btn btn-warning submit-button" type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>

      {/* Scroll to this section after submitting the search term */}
      <div ref={movieListRef}>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
