import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <div className="Navbar">
      <h1 className="hero-title">WERKSCHAU 2026</h1>

      <nav>
        <NavLink className="nav-items" to="/">
          home
        </NavLink>

        <NavLink className="nav-items" to="/timetable">
          timetable
        </NavLink>
        
        <NavLink className="nav-items" to="/about">
          about
        </NavLink>
{/*
        <NavLink to="/projects" exact>
          about
        </NavLink> */}
      </nav>
    </div>
  );
}

export default NavBar;
