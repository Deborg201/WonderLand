import React, { useState, useEffect } from "react";
import SearchIcon from "./../search.svg";
import BookCard from "./BookCard.jsx";

const BookComp = () => {
    
    useEffect(() => {
        searchBooks("Love");
        console.log("Bookcard rendered");
    }, []);
    
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);
    const bookoptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '17e69bcb44msh7c3de6e1fb10dbep1e9f30jsnf6518912a083',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
    };
    const searchBooks = async (bookTitle) => {
        let title = bookTitle.replace(/ /g, "%20");
        const response = await fetch(`https://book-finder1.p.rapidapi.com/api/search?title=${title}&results_per_page=100`, bookoptions)
        .catch(err => console.error(err));
        const bookdata = await response.json();
        console.log(bookdata);
        setBooks(bookdata.results);
        //setBooks(bookdata);
    }

    return (
    
      <div>
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for Books"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchBooks(searchTerm)}
          />
        </div>

        {books?.length > 0 ? (
          <div className="container">
            {books.map((book) => (
              <BookCard book={book} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Books Found</h2>
            </div>
      
        )}
    </div>
    
    );
    
    
    
}

export default BookComp;