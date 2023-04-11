import React from 'react';

//const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
const BookCard = ({ book }) => {
    let trimmedSummary = book.summary.substring(0, 450);
    return (

    <div className="movie" key={book.published_works[0].isbn}>
      <div>
        <p>{book.published_works[0].copyright}</p>
        {/* <p>{book.authors[0]}</p> */}
        <p className='hides'>{trimmedSummary+"....."}</p>
        {/* <p className='hides'><a href={song.data.artists.items[0].uri}>Visit Artist</a></p> */}
      </div>

      <div>
        <img src={book.published_works[0].cover_art_url} alt={book.title} />//: "https://via.placeholder.com/400
      </div>

      <div>
        <span>{book.categories[0]+book.categories[1]}</span>
        {/* noopener noreferrer protects from tabnabbing */}
        <h3>{book.title + "   -By " +book.authors[0]}</h3>
      </div>
    </div>
  );
}

export default BookCard;