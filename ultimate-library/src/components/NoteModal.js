import React, { useState } from "react";

const NoteModal = ({ notes, onClose, onAddNote, currentBook }) => {
  const [page, setPage] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleAddNote = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const newNote = {
      book: currentBook,
      page,
      message,
    };
    onAddNote(newNote);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Notes</h2>
        {notes.map((note, index) => (
          <div key={index}>
            <p>
              <strong>Page:</strong> {note.page}
            </p>
            <p>
              <strong>Message:</strong> {note.message}
            </p>
          </div>
        ))}
        <button onClick={() => setShowForm(true)}>Add Note</button>
        {showForm && (
          <form onSubmit={handleAddNote}>
            <label>
              Note on page:
              <input
                type="text"
                value={page}
                onChange={(e) => setPage(e.target.value)}
              />
            </label>
            <label>
              Note message:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button type="submit">Add Note</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NoteModal;
