import React, { useState, useEffect } from "react";

function ReadSwitch({ bookId }) {
  const [activeRadio, setActiveRadio] = useState(() => {
    // Retrieve the stored value from local storage, if available
    return localStorage.getItem(`book${bookId}`) || "wishlist";
  });

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    setActiveRadio(selectedValue);

    // Store the selected value in local storage with a specific key for the book
    localStorage.setItem(`book${bookId}`, selectedValue);
  };

  useEffect(() => {
    // Update the active radio value when the book ID changes
    setActiveRadio(localStorage.getItem(`book${bookId}`) || "wishlist");
  }, [bookId]);

  return (
    <div className="switch4-container">
      <div className="switch4">
        <input
          type="radio"
          id={`wishlist-${bookId}`}
          name={`radio-${bookId}`}
          value="wishlist"
          checked={activeRadio === "wishlist"}
          onChange={handleRadioChange}
        />
        <label htmlFor={`wishlist-${bookId}`}>Wishlist</label>

        <input
          type="radio"
          id={`completed-${bookId}`}
          name={`radio-${bookId}`}
          value="completed"
          checked={activeRadio === "completed"}
          onChange={handleRadioChange}
        />
        <label htmlFor={`completed-${bookId}`}>Completed</label>

        <input
          type="radio"
          id={`inprogress-${bookId}`}
          name={`radio-${bookId}`}
          value="inprogress"
          checked={activeRadio === "inprogress"}
          onChange={handleRadioChange}
        />
        <label htmlFor={`inprogress-${bookId}`}>In Progress</label>

        <span
          id="active-label"
          style={{
            left:
              activeRadio === "wishlist"
                ? "0%"
                : activeRadio === "completed"
                ? "33%"
                : "66%",
          }}
        ></span>
      </div>
    </div>
  );
}

export default ReadSwitch;
