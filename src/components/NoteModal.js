import React, { useState, useEffect } from "react";

const NoteModal = ({ bookId, storedNote, storedNoteTitle, closeModal }) => {
  const [noteTitle, setNoteTitle] = useState(storedNoteTitle || "");
  const [note, setNote] = useState(storedNote || "");
  const [page, setPage] = useState("");

  const handleChangeNoteTitle = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleChangeNote = (event) => {
    setNote(event.target.value);
  };

  const handleChangePage = (event) => {
    setPage(event.target.value);
  };

  const handleAddnote = () => {
    const newNote = { title: noteTitle, note: note, page: page };
    const notes = JSON.parse(localStorage.getItem(`book${bookId}_notes`)) || [];
    notes.push(newNote);
    localStorage.setItem(`book${bookId}_notes`, JSON.stringify(notes));
    setNoteTitle(""); // Clear note title
    setNote(""); // Clear note
    setPage(""); // Clear page
    closeModal();
  };

  return (
    <div className="modal-container">
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <div className="input-group-modal">
          <h4>Add Note</h4>
          <input
            type="text"
            value={noteTitle}
            onChange={handleChangeNoteTitle}
            placeholder="Note Title"
            className="note-title"
          />
          <input
            type="text"
            value={page}
            onChange={handleChangePage}
            placeholder="Page Number"
            className="note-page"
          />
          <textarea
            className="note-field"
            value={note}
            onChange={handleChangeNote}
            placeholder="Type your note..."
          />
        </div>
        <div className="buttons">
          <button onClick={handleAddnote}>Save</button>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
