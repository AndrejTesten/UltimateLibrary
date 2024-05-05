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
function App() {
  const [data, setData] = useState(null);

  const handleSearch = (query) => {
    fetchData(query).then((data) => {
      setData(data);
      console.log(data);
    });
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
          <Route path="/result" element={<Result data={data} />} />
          <Route path="/book/:key" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
