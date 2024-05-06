import React, { useState } from "react";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="button-container">
      <div
        className="notes-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="main-button note-btn">Notes</button>
      </div>
      <div className={`additional-buttons ${isHovered ? "show" : ""}`}>
        <button className="additional-button note-btn-add">Add Notes</button>
        <button className="additional-button note-btn-add">See Notes</button>
      </div>
    </div>
  );
}
export default App;
