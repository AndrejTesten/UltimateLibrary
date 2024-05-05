import React from "react";
import { Link } from "react-router-dom";
import DetailsButton from "./../components/DetailsButton";
import AddToShelfButton from "./../components/AddToShelf";

function Result({ data }) {
  const addToShelf = (book) => {
    const shelfData = JSON.parse(localStorage.getItem("shelfData")) || [];
    shelfData.push(book);
    localStorage.setItem("shelfData", JSON.stringify(shelfData));
    alert("Book added to shelf!");
  };

  return (
    <div className="result-section" id="result-section">
      {data && data.docs && data.docs.length > 0 && (
        <div className="cards">
          {data.docs.map((book, index) => {
            const extractedKey = book.key.split("/")[2];
            return (
              <div className="card" key={index}>
                <div className="card-title">
                  <strong>Title:</strong> {book.title}
                </div>
                <div className="card-author">
                  <strong>Author:</strong>{" "}
                  {book.author_name && book.author_name.length > 0
                    ? book.author_name[0]
                    : "Unknown"}
                </div>
                <div className="card-year">
                  <strong>Publish Year:</strong>{" "}
                  {book.publish_year && book.publish_year.length > 0
                    ? book.publish_year[0]
                    : "Unknown"}
                </div>
                {book.cover_i && (
                  <img
                    src={`http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                    alt="Book Cover"
                  />
                )}
                <div className="buttons">
                  <Link
                    to={`/book/${extractedKey}/${
                      book.author_name
                        ? encodeURIComponent(book.author_name[0])
                        : "Unknown"
                    }`}
                  >
                    <DetailsButton />
                  </Link>
                  {/* Pass the book object to the AddToShelfButton component */}
                  <AddToShelfButton
                    book={book}
                    onClick={() => addToShelf(book)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Result;
