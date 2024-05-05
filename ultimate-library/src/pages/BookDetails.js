// BookDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { key } = useParams();

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
    <div>
      {/* Display book details */}
      <h2>Book Details</h2>
      <p>First Published: {bookDetails.first_publish_date}</p>
      <p>Title: {bookDetails.title}</p>
      <p>Author: {bookDetails.author_name}</p>
      <p>Description: {bookDetails.description}</p>
    </div>
  );
}
