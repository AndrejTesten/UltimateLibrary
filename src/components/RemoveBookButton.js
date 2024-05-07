// RemoveBookButton.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const RemoveBookButton = ({ book, onRemove }) => {
  const handleClick = () => {
    // Call the onRemove function to notify the parent component about the removal
    if (onRemove) {
      onRemove(book);
    }
  };

  return (
    <button className="remove-btn" onClick={handleClick}>
      <FontAwesomeIcon className="trash" icon={faX} />
    </button>
  );
};

export default RemoveBookButton;
