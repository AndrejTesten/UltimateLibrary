// BookDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

export default function BookDetails() {
  const { key, author } = useParams();

  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    console.log("Key:", key);
    fetchBookDetails();
  }, [key]); // Fetch book details whenever the book ID changes

  const fetchBookDetails = () => {
    fetch(`https://openlibrary.org/works/${key}.json`)
      .then((response) => response.json())
      .then((data) => {
        setBookDetails(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  };

  if (!bookDetails) {
    return <div>Loading...</div>; // Render loading indicator while fetching data
  }

  return (
    <div className="details-page">
      {/* Display book details */}
      <h2>Book Details</h2>
      {bookDetails.covers && bookDetails.covers.length > 0 ? (
        <img
          src={`http://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-L.jpg`}
          alt="Book Cover"
        />
      ) : (
        <p>No Book Cover</p>
      )}
      <p id="publish-year">First Published: {bookDetails.first_publish_date}</p>
      <p id="publish-title">Title: {bookDetails.title}</p>
      <p id="publish-author">Author: {author || "Unknown"}</p>
      <p id="description">
        Description:{" "}
        {bookDetails.description && bookDetails.description.value
          ? bookDetails.description.value
          : bookDetails.description}
      </p>
    </div>
  );
}
