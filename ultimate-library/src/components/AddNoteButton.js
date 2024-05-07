import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function AddNoteButton({ onAddNote, onSeeNotes }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="button-container">
      <div
        className="notes-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="main-button note-btn">
          <FontAwesomeIcon icon={faBookBookmark} />
          Notes
        </button>
      </div>
      <div className={`additional-buttons ${isHovered ? "show" : ""}`}>
        <button className="additional-button note-btn-add" onClick={onAddNote}>
          Add Notes
        </button>
        {/* Add onClick event handler for See Notes button */}
        <button className="additional-button note-btn-add" onClick={onSeeNotes}>
          See Notes
        </button>
      </div>
    </div>
  );
}
export default AddNoteButton;
