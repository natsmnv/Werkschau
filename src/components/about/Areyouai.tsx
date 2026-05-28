import './areyouai.scss';
import { useNavigate } from "react-router-dom";

export default function Areyouai() {
    const navigate = useNavigate();

    return (
        <div className="areyouai-section">
            <h2>Are you human or AI?</h2>
            <button onClick={() => navigate("/areyouaipage")}>make the test</button>
        </div>
    )
}