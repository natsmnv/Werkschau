import { useParams } from 'react-router-dom';

import { data } from './data';

import './projectDetail.scss';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function ProjectDetail() {
    const navigate = useNavigate();
    const { slug } = useParams();

    const project = data.find(
        (p) => p.slug === slug
    );

    return (
        <div className="project-detail-section">
            <div className="back" onClick={() => navigate(-1)}>
                <IoIosArrowBack fontSize='30px' />
                <p>BACK</p>
            </div>
            <div className="project-detail-section__info">
                <div className="project-detail-section__info--text text">
                    <h4 className="text__title">{project?.title}</h4>
                    <h6 className="text__category">{project?.category}</h6>
                    <p className="text__description">{project?.description}</p>
                </div>
                <div className="project-detail-section__info--img">
                    <img src={project?.previewImg} alt={project?.title} />
                </div>
            </div>
            <div className="project-detail-section__img">
                <img src={project?.pageImg} alt={project?.title} />
            </div>
            <div className="project-detail-section__credits">
                <h5 className="project-detail-section__credits--title">CREDITS</h5>
                {project?.team.map(person => (
                    <p>{person}</p>
                ))}
            </div>
        </div>
    );
}