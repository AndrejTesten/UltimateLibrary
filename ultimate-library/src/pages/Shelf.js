import React, { useState, useEffect } from "react";
import "./Shelf.css";
import AddImpressionButton from "./../components/AddImpressionButton";
import RemoveBookButton from "./../components/RemoveBookButton";
import GoHome from "./../components/GoHome";
import AddNoteButton from "./../components/AddNoteButton";
import NoteModal from "./../components/NoteModal";
const Shelf = () => {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentBookNotes, setCurrentBookNotes] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("shelfData")) || [];
    setBooks(storedBooks);
  }, []);

  const handleRemoveBook = (bookToRemove) => {
    const updatedBooks = books.filter((book) => book !== bookToRemove);
    setBooks(updatedBooks);
    localStorage.setItem("shelfData", JSON.stringify(updatedBooks));
  };

  const handleSeeNotes = (book) => {
    setCurrentBookNotes(book.notes || []);
    setCurrentBook(book); // Set the current book

    setShowModal(true);
  };

  const handleAddNote = (note) => {
    // Find the index of the book in the books array
    const bookIndex = books.findIndex((book) => book.id === note.book.id);
    // If the book is not found, return
    if (bookIndex === -1) {
      console.error("Book not found.");
      return;
    }

    // Make a copy of the books array
    const updatedBooks = [...books];

    // Get the book object from the updatedBooks array
    const updatedBook = updatedBooks[bookIndex];

    // Update the notes of the book object
    updatedBook.notes = [...(updatedBook.notes || []), note];

    // Update the state with the modified books array
    setBooks(updatedBooks);

    // Update local storage
    localStorage.setItem("shelfData", JSON.stringify(updatedBooks));

    // Update current book notes state
    setCurrentBookNotes(updatedBook.notes || []);
  };

  return (
    <div className="shelf-section">
      <h2>Book Shelf</h2>
      {books.length === 0 ? (
        <div className="empty-section">
          <h3 className="empty">
            Your shelf is empty. You should search for books and add them to
            your shelf.
          </h3>
          <GoHome />
        </div>
      ) : (
        <div className="cards-shelf">
          {books.map((book, index) => (
            <div className="card-shelf" key={index}>
              <div className="title-card">
                <strong>{book.title}</strong>
              </div>
              <div className="author-card">
                <strong>Author: {book.author_name + " "}</strong>
              </div>
              <div className="subject-card">
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
                <AddNoteButton onClick={() => handleSeeNotes(book)} />
                <AddImpressionButton />
                <RemoveBookButton book={book} onRemove={handleRemoveBook} />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="btn-alt">
        <GoHome />
      </div>
      {showModal && (
        <NoteModal
          notes={currentBookNotes}
          currentBook={currentBook} 
          onClose={() => setShowModal(false)}
          onAddNote={handleAddNote}
        />
      )}
    </div>
  );
};

export default Shelf;
