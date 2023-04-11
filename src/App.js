import React, { useState, useEffect } from "react";
import Moviecomp from "./Components/movieComp";
import SongComp from "./Components/songComp";
import BookComp from "./Components/bookComp";
import AnimeComp from "./Components/animeComp";
import GameComp from "./Components/gameComp";
import "./App.css";
import './Custom.css';

const App = () => {


  //                      States Declaration

  const [movieSwitch, setMovieSwitch] = useState(false);
  const [heading, setHeading] = useState("WonderLand");
  const [animeSwitch, setAnimeSwitch] = useState(false);
  const [gameSwitch, setGameSwitch] = useState(false);
  const [bookSwitch, setBookSwitch] = useState(false);
  const [songSwitch, setSongSwitch] = useState(false);
  
  //                  Functions for onClicks  
  const switchALL = () => {
    setAnimeSwitch(false);
    setBookSwitch(false);
    setSongSwitch(false);
    setGameSwitch(false);
    setMovieSwitch(false);
  }

  const handleMovie = () => {
    switchALL();
    setMovieSwitch(!movieSwitch);
    setHeading("MovieLand");
  }

  const handleAnime = () => {
    switchALL();
    setAnimeSwitch(!animeSwitch);
    setHeading("AnimeLand");
  }

  const handleBook = () => {
    switchALL();
    setBookSwitch(!bookSwitch);
    setHeading("BookLand");
  }

  const handleGame = () => {
    switchALL();
    setGameSwitch(!gameSwitch);
    setHeading("GameLand");
  }

  const handleSong = () => {
    switchALL();
    setSongSwitch(!songSwitch);
    setHeading("SongLand");
  }

  //                Rendering Components


  return (
    <div className="app">
      <h1>{heading}</h1>
      {console.log("entirepage rendered")}
      <div className="NavbarContainer">
        <ul className="Navbar">
          <li className="NavbarMenus">
            <button type="button" onClick={handleMovie}
              >Movies</button></li>
          <li className="NavbarMenus"><button type="button" onClick={handleAnime}>Anime</button></li>
          <li className="NavbarMenus"><button type="button" onClick={handleGame}>Games</button></li>
          <li className="NavbarMenus"><button type="button" onClick={handleSong}>Songs</button></li>
          <li className="NavbarMenus"><button type="button" onClick={handleBook}>Books</button></li>
        </ul>
      </div>
      {movieSwitch ? (<Moviecomp />) : (<></>)}
      {animeSwitch ? (<AnimeComp />) : (<></>)}
      {bookSwitch  ? (<BookComp />) : (<></>)}
      {gameSwitch  ? (<GameComp />) : (<></>)}
      {songSwitch  ? (<SongComp />) : (<></>)}
      <div className="bgimage"><img src={require("./Images/1.jpg")}></img></div>
      
    </div>
  );
};

export default App;