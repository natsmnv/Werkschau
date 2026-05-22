import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="information-container">
      <div className="information-left">
        <p>
          The Werkschau 2026, taking place 1–3 June, presents art, media, and
          technology projects by “human,” from the Department of Creative
          Technologies at Salzburg University of Applied Sciences.
        </p>
      </div>

      <div className="information-right">
        <p className="information-right-location">LOCATION</p>
        <p>FH Salzburg </p>
        <p>Urstein S 1, 5412 Puch</p>
      </div>
    </div>
  );
}

export default Home;
