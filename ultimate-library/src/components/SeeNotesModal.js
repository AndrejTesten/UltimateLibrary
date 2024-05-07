import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const SeeNotesModal = ({ bookId, closeModal }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes =
      JSON.parse(localStorage.getItem(`book${bookId}_notes`)) || [];
    setNotes(storedNotes);
  }, [bookId]);

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    localStorage.setItem(`book${bookId}_notes`, JSON.stringify(updatedNotes));
  };

  return (
    <div className="modal-container">
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h4>All Notes</h4>
        <div className="notes-list">
          {notes.map((note, index) => (
            <div key={index} className="note-item">
              <h5>{note.title}</h5>
              <p>Page: {note.page}</p>
              <p>{note.note}</p>
              <button
                className="delete-btn-note"
                onClick={() => handleDeleteNote(index)}
              >
                <FontAwesomeIcon className="trash" icon={faX} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeeNotesModal;
