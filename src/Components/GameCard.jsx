import React from 'react';
const GameCard = ({ game }) => {
    // let allgenre = "";
    // game.genres?.length > 0 ?
    // game.genres.map((genre) => {
    // allgenre = allgenre + "," + genre;
    // }):allgenre="Unknown Genre";
    //let trimmedSummary = anime.synopsis.substring(0, 350);
    
    var allgenre = "";
    if (game.genres?.length > 0) {
        game.genres.map((genre) => {
            allgenre = allgenre + " " + genre.name;
        });
    }
    var allplatforms = "";
    if (game.parent_platforms?.length > 0) {
        game.parent_platforms.map((platfromer) => {
            allplatforms = allplatforms + " " + platfromer.platform.name;
        });
    }
        return (

        <div className="movie" key={game.id}>
          <div>
            <p>{game.released}</p>
            <p>{allplatforms}</p>
            {/* <p className='hides'>{trimmedSummary+"....."}</p> */}
            {/* <p className='hides'><a href={song.data.artists.items[0].uri}>Visit Artist</a></p> */}
          </div>

          <div>
            <img src={game.background_image} alt={game.name} />//: "https://via.placeholder.com/400
          </div>

          <div>
                    <span>{allgenre}</span>
            {/* noopener noreferrer protects from tabnabbing */}
            <h3>{game.name}</h3>
          </div>
        </div>
      );
    }

export default GameCard;