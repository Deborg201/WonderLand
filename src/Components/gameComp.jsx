import React, { useState, useEffect } from "react";
import SearchIcon from "./../search.svg";
import GameCard from "./GameCard";

const GameComp = () => {
    
    useEffect(() => {
        searchGames("GTA");
        console.log("GameCard Rendered");
    }, []);
    
    const [searchTerm, setSearchTerm] = useState("");
    const [games, setGames] = useState([]);

    const options = {
	method: 'GET'
};

    const searchGames = async (gameTitle) => {
        let title = gameTitle.replace(/ /g, "%20");
        const response = await fetch(`https://api.rawg.io/api/games?key=c1235f4540754284b358ea115ebc091b&page_size=100&search=${title}&ordering=-rating`,options)
            .catch(err => console.error(err));
        const gamedata = await response.json();
        console.log(gamedata);
        setGames(gamedata.results);
    }

return (
    
      <div>
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for Games"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchGames(searchTerm)}
          />
        </div>

        {games?.length > 0 ? (
          <div className="container">
            {games.map((game) => (
              <GameCard game={game} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Game Found</h2>
            </div>
      
        )}
    </div>
    
    );
    
    
    
}

export default GameComp;
