import React, { useState } from "react";
import { fetchData } from "./../api";
import SearchBar from "./../components/SearchBar";
export default function Home({ handleSearch }) {
  return (
    <div className="home">
      <div className="home-section">
        <h1 className="title-animation-one">UltimateLibrary</h1>
        <p className="title-animation-two">Your Personal Literary Oasis.</p>
        <p>
          <span className="text-animation-one">
            Discover, Collect, Reflect.
          </span>
        </p>
        <p>
          <span className="text-animation-two">Your Books, Your Journey.</span>
        </p>
        <div className="search-section">
          <SearchBar handleSearch={handleSearch} />
        </div>
      </div>
    </div>
  );
}
