// Soulspace App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore"; // Import Signup and Dashboard later

const App = () => {
  return (
    <Router>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Explore />} />{" "}
        {/* Add signup and dashboard later */}{" "}
      </Routes>{" "}
    </Router>
  );
};
export default App;