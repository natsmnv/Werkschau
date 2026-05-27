import { useState, useEffect, useRef } from "react";
import "./Home.css";
import { motion } from "motion/react";

const Square = () => {
  const [revealed, setRevealed] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const reveal = () => {
    setRevealed(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setRevealed(false);
    }, 20000);
  };

  return (
    <motion.div
      className="square"
      animate={{
        backgroundColor: revealed ? "transparent" : "white",
      }}
      transition={{
        duration: revealed ? 0.2 : 1,
      }}
      onHoverStart={reveal}
      onTouchStart={reveal}
    />
  );
};

function Home() {
  const cols = 60;
  const rows = 20;
  const hasRun = useRef(false);
  const [bgImageIndex, setBgImageIndex] = useState(0);

  const RandomNumber = () => {
    const imgIndex = Math.floor(Math.random() * 10) + 1;
    setBgImageIndex(imgIndex);
  };

  useEffect(() => {
    if (hasRun.current) return;

    hasRun.current = true;
    RandomNumber();
  }, []);

  return (
    <div className="home">
      <div className="image-blob">
        <div className="squares-grid">
          {Array.from({ length: rows * cols }).map((_, i) => (
            <Square key={i} />
          ))}
        </div>

        <img
          src={`/photos/human-at-core/background${bgImageIndex}.png`}
          alt="BG1"
          className="hero-image"
        />
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