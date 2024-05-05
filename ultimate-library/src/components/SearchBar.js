import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ handleSearch }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleButtonClick = () => {
    handleSearch(query.trim());
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter book title..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Search</button>
    </div>
  );
}

export default SearchBar;
