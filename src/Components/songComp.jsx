import React, { useState, useEffect } from "react";
import SearchIcon from "./../search.svg";
import SongCard from "./SongCard";

export default function SongComp() {
  useEffect(() => {
    searchSongs("Arijit");
    console.log("SongCard rendered");
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [songs, setSongs] = useState([]);
    
  const songOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '17e69bcb44msh7c3de6e1fb10dbep1e9f30jsnf6518912a083',
      'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
    }
  };
  const searchSongs = async (songTitle) => {
    let title = songTitle.replace(/ /g, "%20");
    const response = await fetch(`https://spotify81.p.rapidapi.com/search?q=${title}&type=multi`, songOptions)
    .catch(err => console.error(err));
    const songdata = await response.json();
    console.log(songdata.albums.items);
    setSongs(songdata.albums.items);
    //setSongs(songdata);
  }
  

 return (
    
      <div>
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for Songs"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchSongs(searchTerm)}
          />
        </div>

        {songs?.length > 0 ? (
          <div className="container">
            {songs.map((song) => (
              <SongCard song={song} />
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