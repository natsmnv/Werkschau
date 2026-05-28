import './about.scss';
import Areyouai from './Areyouai';
import Humanatcore from './Humanatcore';
import Team from './Team';

export default function About() {
    return (
        <div className='container'>
            <Humanatcore/>
            <Areyouai/>
            <Team/>
        </div>
    )
}