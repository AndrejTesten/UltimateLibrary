import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";


function App() {
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
        <button className="additional-button note-btn-add">Add Notes</button>
        <button className="additional-button note-btn-add">See Notes</button>
      </div>
    </div>
  );
}
export default App;
