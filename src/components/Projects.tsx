import { useState } from 'react';
import { data } from './data';
import { Link } from 'react-router-dom';
import './projects.scss';
import { IoIosArrowUp } from "react-icons/io";

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("3D");
  
    const filteredProjects = data.filter(
        (project) => project.category === activeCategory
    );

    return (
        <div className="projects-section">
            <div className="projects-section__wrap">
                <div>
                    <h4>PROJECTS</h4>
                    <button className='filtering' onClick={() => {
                        const links = document.querySelectorAll('.projects-section__tabs button');
                        const linksWrap = document.querySelector('.projects-section__tabs');
                        const arrow = document.querySelector('.arrow');

                        links.forEach(link => {
                            link.classList.toggle('hide');
                        });
                        linksWrap?.classList.toggle('menu');
                        arrow?.classList.toggle('arrowUp');
                    }}><IoIosArrowUp color='white' className='arrow' />FILTER</button>
                </div>
                <div className="projects-section__tabs">
                    <button className="projects-section__tabs--link hide" onClick={() => {setActiveCategory('3D')}}>3D</button>
                    <button className="projects-section__tabs--link hide" onClick={() => {setActiveCategory('AUDIO')}}>AUDIO</button>
                    <button className="projects-section__tabs--link hide" onClick={() => {setActiveCategory('FILM')}}>FILM</button>
                    <button className="projects-section__tabs--link hide" onClick={() => {setActiveCategory('COMMUNICATIONDESIGN')}}>COMMUNICATIONDESIGN</button>
                    <button className="projects-section__tabs--link hide" onClick={() => {setActiveCategory('WEB')}}>WEB</button>
                    <button className="projects-section__tabs--link hide" onClick={() => {setActiveCategory('GAME')}}>GAME</button>
                    <button className="projects-section__tabs--link hide" onClick={() => {setActiveCategory('HCI')}}>HCI</button>
                    <button className="projects-section__tabs--link hide" onClick={() => {setActiveCategory('PRODUCING')}}>PRODUCING</button>
                    <button className="projects-section__tabs--link hide" onClick={() => {setActiveCategory('RAVE')}}>RAVE</button>
                </div>
            </div>
            <div className="projects-section__cards">
                {filteredProjects.map((project, i) => (
                    <Link
                        to={`/projects/${project.slug}`}
                        key={project.id}
                        className={`projects-section__cards--card card card-${i+1}`}>
                        <div>
                            <img src={project.previewImg} alt="" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}