import React from 'react';
const AnimeCard = ({ anime }) => {
    let trimmedSummary = anime.synopsis.substring(0, 350);
    return (

    <div className="movie" key={anime.id}>
      <div>
        <p>{anime.start_date+" To " + anime.end_date}</p>
        <p>{anime.num_episodes+" Episodes"}</p>
        <p className='hides'>{trimmedSummary+"....."}</p>
        {/* <p className='hides'><a href={song.data.artists.items[0].uri}>Visit Artist</a></p> */}
      </div>

      <div>
        <img src={anime.main_picture.large} alt={anime.title} />//: "https://via.placeholder.com/400
      </div>

      <div>
        <span>{anime.genres[0]+anime.genres[1]}</span>
        {/* noopener noreferrer protects from tabnabbing */}
        <h3>{anime.title + "   -: " +anime.status}</h3>
      </div>
    </div>
  );
}

export default AnimeCard;