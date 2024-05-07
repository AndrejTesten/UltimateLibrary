// Shelf.js

import React, { useState, useEffect } from "react";
import "./Shelf.css";
import AddImpressionButton from "./../components/AddImpressionButton";
import RemoveBookButton from "./../components/RemoveBookButton";
import GoHome from "./../components/GoHome";
import ReadSwitch from "./../components/ReadSwitch";
import NoteModal from "./../components/NoteModal";
import ImpressionModal from "./../components/ImpressionModal"; // Import ImpressionModal component
import AddNoteButton from "./../components/AddNoteButton";
import SeeNotesModal from "./../components/SeeNotesModal"; // Import SeeNotesModal component

function Shelf() {
  const [books, setBooks] = useState([]);
  const [originalBooks, setOriginalBooks] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false); // State to manage the Add Notes modal visibility
  const [showSeeModal, setShowSeeModal] = useState(false); // State to manage the See Notes modal visibility
  const [showImpressionModal, setShowImpressionModal] = useState(false); // State to manage the Impression modal visibility
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

    if (selectedValue !== "") {
      const filteredBooks = originalBooks.filter((book) => {
        const bookStatus = localStorage.getItem(`book${book.id}`);
        return bookStatus === selectedValue;
      });
      setBooks(filteredBooks);
    } else {
      setBooks(originalBooks);
    }
  };

  const handleAddNote = (bookId) => {
    setCurrentBook(bookId);
    setShowAddModal(true);
  };

  const handleSeeNotes = (bookId) => {
    setCurrentBook(bookId);
    setShowSeeModal(true);
  };

  const handleAddImpression = (bookId) => {
    setCurrentBook(bookId);
    setShowImpressionModal(true);
  };

  const closeModal = () => {
    setShowAddModal(false);
    setShowSeeModal(false);
    setShowImpressionModal(false); // Close Impression modal as well
  };

  return (
    <div className="shelf-section">
      <div className="title-part">
        <h2>Book Shelf</h2>
        <select value={filterValue} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="wishlist">Wishlisted</option>
          <option value="inprogress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      {books.length === 0 ? (
        <div className="empty-section">
          <h3 className="empty">
            Your shelf is empty. You should search for books and add them to
            your shelf, or filter them by different value.
          </h3>
        </div>
      ) : (
        <div className="cards">
          {books.map((book) => (
            <div className="card" key={book.id}>
              <div className="card-title">
                <strong>{book.title}</strong>
              </div>
              <div className="card-author">
                <strong>Author: {book.author_name[0] + " "}</strong>
              </div>
              <div className="card-subject">
                {book.subject_facet && (
                  <strong>
                    Subjects: {book.subject_facet.slice(1, 3).join(", ")}
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
                <AddNoteButton
                  onAddNote={() => handleAddNote(book.id)}
                  onSeeNotes={() => handleSeeNotes(book.id)}
                />
                <AddImpressionButton
                  bookId={book.id}
                  onAddImpression={() => handleAddImpression(book.id)} // Pass handler to open Impression modal
                />
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
      {/* Render the NoteModal, ImpressionModal, or SeeNotesModal based on which one is active */}
      {showAddModal && (
        <NoteModal
          bookId={currentBook}
          storedNote={localStorage.getItem(`book${currentBook}_note`)}
          closeModal={closeModal}
        />
      )}
      {showSeeModal && (
        <SeeNotesModal bookId={currentBook} closeModal={closeModal} />
      )}
      {showImpressionModal && (
        <ImpressionModal
          bookId={currentBook}
          storedImpression={localStorage.getItem(
            `book${currentBook}_impression`
          )}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default Shelf;
