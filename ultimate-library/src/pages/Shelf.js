import React, { useState, useEffect } from "react";

const Shelf = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("shelfData")) || [];
    setBooks(storedBooks);
  }, []);

  return (
    <div>
      <h2>Book Shelf</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>Title:</strong> {book.title} | <strong>Author:</strong>{" "}
            {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shelf;
