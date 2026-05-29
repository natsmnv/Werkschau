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

    function highlightLink(e) {
        const links = document.querySelectorAll('.projects-section__tabs button');
        links.forEach(link => {
            link.classList.remove('highlight');
            if (link.innerHTML == e.target.innerHTML) {
                link.classList.add('highlight');
            }
        })
    }

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
                    <button className="projects-section__tabs--link hide highlight" onClick={(e) => {setActiveCategory('3D'); highlightLink(e);}}>3D</button>
                    <button className="projects-section__tabs--link hide" onClick={(e) => {setActiveCategory('AUDIO'); highlightLink(e);}}>AUDIO</button>
                    <button className="projects-section__tabs--link hide" onClick={(e) => {setActiveCategory('FILM'); highlightLink(e);}}>FILM</button>
                    <button className="projects-section__tabs--link hide" onClick={(e) => {setActiveCategory('COMMUNICATIONDESIGN'); highlightLink(e);}}>COMMUNICATIONDESIGN</button>
                    <button className="projects-section__tabs--link hide" onClick={(e) => {setActiveCategory('WEB'); highlightLink(e);}}>WEB</button>
                    <button className="projects-section__tabs--link hide" onClick={(e) => {setActiveCategory('GAME'); highlightLink(e);}}>GAME</button>
                    <button className="projects-section__tabs--link hide" onClick={(e) => {setActiveCategory('HCI'); highlightLink(e);}}>HCI</button>
                    <button className="projects-section__tabs--link hide" onClick={(e) => {setActiveCategory('PRODUCING'); highlightLink(e);}}>PRODUCING</button>
                    <button className="projects-section__tabs--link hide" onClick={(e) => {setActiveCategory('RAVE'); highlightLink(e);}}>RAVE</button>
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