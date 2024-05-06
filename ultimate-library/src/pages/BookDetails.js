import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import GoHome from "./../components/GoHome";

export default function BookDetails() {
  const { key, author } = useParams();

  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    fetchBookDetails();
  }, [key]);

  const fetchBookDetails = () => {
    fetch(`https://openlibrary.org/works/${key}.json`)
      .then((response) => response.json())
      .then((data) => {
        setBookDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  };

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-page">
      <h2>Book Details</h2>
      {bookDetails.covers && bookDetails.covers.length > 0 ? (
        <div className="img-container">
          <img
            src={`http://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-L.jpg`}
            alt="Book Cover"
          />
        </div>
      ) : (
        <p>No Book Cover</p>
      )}
      <p id="publish-year">First Published: {bookDetails.first_publish_date}</p>
      <p id="publish-title">Title: {bookDetails.title}</p>
      <p id="publish-author">Author: {author || "Unknown"}</p>
      <p id="description">
        {bookDetails.description && bookDetails.description.value
          ? bookDetails.description.value
          : "No description available"}
      </p>
      <GoHome />
    </div>
  );
}
