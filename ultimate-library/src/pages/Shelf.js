import React, { useState, useEffect } from "react";
import "./Shelf.css";
import AddImpressionButton from "./../components/AddImpressionButton";
import RemoveBookButton from "./../components/RemoveBookButton";
import GoHome from "./../components/GoHome";
import AddNoteButton from "./../components/AddNoteButton";
import ReadSwitch from "./../components/ReadSwitch";

function Shelf() {
  const [books, setBooks] = useState([]);
  const [originalBooks, setOriginalBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentBookNotes, setCurrentBookNotes] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("shelfData")) || [];
    setBooks(storedBooks.map((book, index) => ({ ...book, id: index })));
    setOriginalBooks(
      storedBooks.map((book, index) => ({ ...book, id: index }))
    );
  }, []);

  const handleRemoveBook = (bookToRemove) => {
    const updatedBooks = books.filter((book) => book !== bookToRemove);
    setBooks(updatedBooks);
    localStorage.setItem("shelfData", JSON.stringify(updatedBooks));
  };

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setFilterValue(selectedValue);

    // If a filter value is selected, filter the original books based on the selected value
    if (selectedValue !== "") {
      const filteredBooks = originalBooks.filter((book) => {
        const bookStatus = localStorage.getItem(`book${book.id}`);
        return bookStatus === selectedValue;
      });
      setBooks(filteredBooks);
    } else {
      // If no filter value is selected, reset to display all original books
      setBooks(originalBooks);
    }
  };

  return (
    <div className="shelf-section">
      <div className="title-part">
        <h2>Book Shelf</h2>
        <select value={filterValue} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="wishlist">Wishlist</option>
          <option value="completed">Reading</option>
          <option value="inprogress">In Progress</option>
        </select>
      </div>
      {books.length === 0 ? (
        <div className="empty-section">
          <h3 className="empty">
            Your shelf is empty. You should search for books and add them to
            your shelf.
          </h3>
          <GoHome />
        </div>
      ) : (
        <div className="cards">
          {books.map((book) => (
            <div className="card" key={book.id}>
              <div className="card-title">
                <strong>{book.title}</strong>
              </div>
              <div className="card-author">
                <strong>Author: {book.author_name + " "}</strong>
              </div>
              <div className="card-subject">
                {book.subject_facet && (
                  <strong>
                    Subjects: {book.subject_facet.slice(0, 3).join(", ")}
                  </strong>
                )}
              </div>
              {book.cover_i && (
                <img
                  src={`http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  alt="Book Cover"
                />
              )}
              <div className="buttons">
                <AddNoteButton />
                <AddImpressionButton />
              </div>
              <ReadSwitch bookId={book.id} />
              <RemoveBookButton book={book} onRemove={handleRemoveBook} />
            </div>
          ))}
        </div>
      )}
      <div className="btn-alt">
        <GoHome />
      </div>
    </div>
  );
}

export default Shelf;
