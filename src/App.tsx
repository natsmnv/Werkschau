import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Timetable from "./components/Timetable";
import About from "./components/about/About";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";
import AreyouaiPage from "./components/AreyouaiPage";
import Imprint from "./components/Imprint";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/areyouaipage" element={<AreyouaiPage />} />
            <Route path="/imprint" element={<Imprint />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
