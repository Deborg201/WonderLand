import React from 'react';

//const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
const SongCard = ({ song }) => {
    const resplay=song.data.uri.slice(14);
    const play="https://open.spotify.com/album/"+resplay;
  return (
    <div className="movie" key={song.data.uri}>
      <div>
        <p>{song.data.date.year}</p>
        <p className='hides'>{song.data.artists.items[0].profile.name}</p>
        {/* <p className='hides'><a href={song.data.artists.items[0].uri}>Visit Artist</a></p> */}
      </div>

      <div>
        <img src={song.data.coverArt.sources[0].url} alt={song.data.name} />//: "https://via.placeholder.com/400
      </div>

      <div>
        <span><a href={play} target="_blank" rel='noopener noreferrer'>Play</a></span>
        {/* noopener noreferrer protects from tabnabbing */}
        <h3>{song.data.name}</h3>
      </div>
    </div>
  );
}

export default SongCard;