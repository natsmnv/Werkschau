import { useState } from "react";
import './team.scss';

export default function Team() {
    const [image, setImage] = useState("");
    const team = {
        "Lilli Brenner": '/team/lilli.png',
        "Valentina Bamminger": '/team/valentina.png',
        "Anna Sophia Hangler": '/team/anna.png',
        "Dominika Daridova": '/team/dominika.png',
        "Annika Cagitz": '/team/annika.png',
        "Bojidar Belov": '/team/bojidar.png',
        "Natalia Semenova": '/team/natalia.png',
        "Viktoria Schneider-Kirjuchina": '/team/viktoria.png',
    }

    const handleHover = (e) => {
        if (e.target.classList.contains("names__name")) {
            const name = e.target.textContent;
            setImage(team[name]);
        }
    };

    return (
        <div className="team-section">
            <h2 className="team-section__title">TEAM</h2>
            <div className="team-section__content">
                <div className="team-section__content--img">
                    {image ? (
                        <img src={image} alt="team member" />
                    ) : (
                        <div className="placeholder"></div>
                    )}
                </div>
                <div className="team-section__content--names names" onMouseOver={handleHover} onMouseLeave={() => setImage("")}>
                    <p className="names__name">Lilli Brenner</p>
                    <p className="names__name">Valentina Bamminger</p>
                    <p className="names__name">Anna Sophia Hangler</p>
                    <p className="names__name">Dominika Daridova</p>
                    <p className="names__name">Annika Cagitz</p>
                    <p className="names__name">Bojidar Belov</p>
                    <p className="names__name">Natalia Semenova</p>
                    <p className="names__name">Viktoria Schneider-Kirjuchina</p>
                </div>
            </div>
        </div>
    )
}