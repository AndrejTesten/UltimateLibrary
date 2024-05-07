// ImpressionModal.js
import React, { useState, useEffect } from "react";

const ImpressionModal = ({ bookId, storedImpression, closeModal }) => {
  const [impression, setImpression] = useState(storedImpression || "");

  // Load stored impression for this specific book
  useEffect(() => {
    const storedImpression = localStorage.getItem(`book${bookId}_impression`);
    setImpression(storedImpression || "");
  }, [bookId]);

  const handleChange = (event) => {
    setImpression(event.target.value);
  };

  const handleAddImpression = () => {
    // Store or update impression for this specific book
    localStorage.setItem(`book${bookId}_impression`, impression);
    closeModal();
  };

  return (
    <div className="modal-container">
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h4>Add Impression</h4>
        <textarea
          className="impression-field"
          value={impression}
          onChange={handleChange}
          placeholder="Type your impression..."
        />
        <div className="buttons">
          <button onClick={handleAddImpression}>Save</button>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ImpressionModal;
