import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; // Import Home component
import PostDetails from "./assets/PostDetails"; // Import PostDetails component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/post/:id" element={<PostDetails />} /> {/* Post details page */}
      </Routes>
    </Router>
  );
};

export default App;
