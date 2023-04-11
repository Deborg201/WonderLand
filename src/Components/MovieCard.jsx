import React from 'react';

//const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  const MovieCard = ({ movie: { title, type, overview, year, imbdRating ,posterURLs} }) => {
  return (
    <div className="movie" key={imbdRating}>
      <div>
        <p>{year}</p>
        <p className='hides'>{ overview}</p>
      </div>

      <div>
        <img src={posterURLs.original} alt={title} />//: "https://via.placeholder.com/400
      </div>

      <div>
        <span>{type}</span>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;