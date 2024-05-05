// AddToShelfButton.js
import React from "react";

function AddToShelfButton({ book }) {
  const handleClick = () => {
    // Retrieve the existing shelf data from local storage, or initialize an empty array if none exists
    const existingShelfData =
      JSON.parse(localStorage.getItem("shelfData")) || [];

    // Add the current book to the shelf data array
    existingShelfData.push(book);

    // Save the updated shelf data back to local storage
    localStorage.setItem("shelfData", JSON.stringify(existingShelfData));

    // Optionally, you can provide feedback to the user that the book has been added to the shelf
    alert("Book added to shelf!");
  };

  return (
    <button className="add-button" onClick={handleClick}>
      Add to Shelf
    </button>
  );
}

export default AddToShelfButton;
