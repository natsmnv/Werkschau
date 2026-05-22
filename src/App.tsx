import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Test from "./components/Test_";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route
            path="/timetable"
            element={<Test/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
