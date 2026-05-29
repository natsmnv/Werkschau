import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="Navbar">
      <h1 className="hero-title">WERKSCHAU 2026</h1>

      {/* Hamburger Button */}
      <button
        className="burger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav className={menuOpen ? "nav-open" : ""}>
        <NavLink className="nav-items" to="/">
          home
        </NavLink>

        <NavLink className="nav-items" to="/timetable">
          timetable
        </NavLink>

        <NavLink className="nav-items" to="/projects">
          projects
        </NavLink>

        <NavLink className="nav-items" to="/about">
          about
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;