import React, { useState } from "react";
import "./Home.css";
import bg1 from "../../photos/background1.png";
import { motion } from "motion/react";

const Square = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <motion.div
      className="square"
      animate={{ backgroundColor: revealed ? "transparent" : "white" }}
      transition={{ duration: revealed ? 0.2 : 1 }}
      onHoverStart={() => setRevealed(true)}
      onHoverEnd={() => setTimeout(() => setRevealed(false), 10000)}
    />
  );
};

function Home() {
  const cols = 60;
  const rows = 20;

  return (
    <div className="home">
      <div className="image-blob">
        <div className="squares-grid">
          {Array.from({ length: rows * cols }).map((_, i) => (
            <Square key={i} />
          ))}
        </div>
        <img src={bg1} alt="BG1" className="hero-image" />
      </div>
      <div className="information-container">
        <div className="information-left">
          <p>
            The Werkschau 2026, taking place 1–3 June, presents art, media, and
            technology projects by "human," from the Department of Creative
            Technologies at Salzburg University of Applied Sciences.
          </p>
        </div>

        <div className="information-right">
          <p className="information-right-location">LOCATION</p>
          <p>FH Salzburg</p>
          <p>Urstein S 1, 5412 Puch</p>
        </div>
      </div>
    </div>
  );
}

export default Home;