import "./Home.css";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className="home">
                <div className="information-right">
                    <p className="information-right-location">LOCATION</p>
                    <p>FH Salzburg</p>
                    <p>Urstein S 1, 5412 Puch</p>
                </div>
            </div>

            <div className="footer-links">
                <a
                    href="https://www.instagram.com/werkschau.fhsalzburg/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="desktop-text">
                        instagram <LuSquareArrowOutUpRight />
                    </span>

                    <span className="mobile-icon">
                        <FaInstagram />
                    </span>
                </a>

                <a
                    href="https://www.linkedin.com/company/fhsalzburg-ct/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="desktop-text">
                        linkedin <LuSquareArrowOutUpRight />
                    </span>

                    <span className="mobile-icon">
                        <FaLinkedin />
                    </span>
                </a>

                <a
                    href="https://www.fh-salzburg.ac.at/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    fhsalzburg <LuSquareArrowOutUpRight />
                </a>

                <a href="/imprint">
                    imprint <LuSquareArrowOutUpRight />
                </a>
            </div>
        </div>
    );
}

export default Footer;