import React, { useState, useEffect } from "react";

import MovieCard from "./Components/MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

//const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Marvel");
  }, []);

  // const searchMovies = async (title) => {
  //   const response = await fetch(`${API_URL}&s=${title}`);
  //   const data = await response.json();

  //   setMovies(data.Search);
  // };

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '17e69bcb44msh7c3de6e1fb10dbep1e9f30jsnf6518912a083',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};
  const searchMovies = async (title) => {
    const response = await fetch(`https://streaming-availability.p.rapidapi.com/v2/search/title?title=${title}&country=in`, options)
	  // .then(response => response.json())
	  // .then(response => console.log(response))
    // .catch(err => console.error(err));
    const data = await response.json();
    console.log(data);

    setMovies(data.result);
  };

  return (
    <div className="app">
      <h1>WonderLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;