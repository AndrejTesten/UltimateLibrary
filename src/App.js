import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { fetchData } from "./api";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BookDetails from "./pages/BookDetails"; // New page for displaying book details
import "./pages/Home.css";
import "./pages/Result.css";
import Shelf from "./pages/Shelf.js";
function App() {
  const [data, setData] = useState(null);

  const handleSearch = (query) => {
    fetchData(query).then((data) => {
      setData(data);
      console.log(data);
    });
  };
  const addToShelf = (book) => {
    // Implement the logic to add a book to the shelf
    console.log("Adding book to shelf:", book);
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home handleSearch={handleSearch} />
                <Result data={data} />{" "}
              </>
            }
          />
          <Route
            path="/result"
            element={<Result data={data} addToShelf={addToShelf} />}
          />
          <Route path="/book/:key/:author" element={<BookDetails />} />
          <Route path="/shelf" element={<Shelf />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
