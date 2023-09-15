import React, { useState, useEffect } from "react";
import SearchIcon from "./../search.svg";
import AnimeCard from "./AnimeCard";

const AnimeComp = () => {
    
    useEffect(() => {
        searchAnime("Naruto");
        console.log("AnimeCard rendered");
    }, []);
    
    const [searchTerm, setSearchTerm] = useState("");
    const [animes, setAnime] = useState([]);

    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '17e69bcb44msh7c3de6e1fb10dbep1e9f30jsnf6518912a083',
		'X-RapidAPI-Host': 'animes5.p.rapidapi.com'
	}
};

    const searchAnime = async (animeTitle) => {
        let title = animeTitle.replace(/ /g, "%20");
        const response = await fetch(`https://animes5.p.rapidapi.com/?fields=*&q=${title}&limit=50`, options)
        .catch(err => console.error(err));   
        const animedata = await response.json();
        console.log(animedata);
        setAnime(animedata.animes);
    }
return (
    
      <div className="searchContainer">
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for Anime"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchAnime(searchTerm)}
          />
        </div>

        {animes?.length > 0 ? (
          <div className="container">
            {animes.map((anime) => (
              <AnimeCard anime={anime} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Anime Found</h2>
            </div>
      
        )}
    </div>
    
    );
    
    
    
}

export default AnimeComp;
