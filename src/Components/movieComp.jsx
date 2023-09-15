import React, { useState , useEffect} from "react";
import SearchIcon from "./../search.svg";
import MovieCard from "./MovieCard";

                            //      States Declaration

  
export default function Moviecomp() {
    
    console.log("MovieCard rendered"); 
    useEffect(() => { searchMovies("Marvel") }, []);
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '17e69bcb44msh7c3de6e1fb10dbep1e9f30jsnf6518912a083',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

const searchMovies = async (title) => {
  const response = await fetch(`https://streaming-availability.p.rapidapi.com/v2/search/title?title=${title}&country=us&show_type=movie&output_language=en`, options)
  .catch(err => console.error(err));
    const data = await response.json();
    console.log(data);

    setMovies(data.result);
};
  
    return (
    
      <div className="searchContainer">
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