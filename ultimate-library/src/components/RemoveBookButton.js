// RemoveBookButton.js
import React from "react";

const RemoveBookButton = ({ book, onRemove }) => {
  const handleClick = () => {
    // Call the onRemove function to notify the parent component about the removal
    if (onRemove) {
      onRemove(book);
    }
  };

  return (
    <button className="remove-btn" onClick={handleClick}>
      Remove Book
    </button>
  );
};

export default RemoveBookButton;
