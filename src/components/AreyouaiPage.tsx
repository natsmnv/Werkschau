import './AreyouaiPage.scss';

export default function AreyouaiPage() {
    return (
        <div className="areyouaipage-section">
            <h1 className="areyouaipage-section__title">Are you human or AI?</h1>
            <div className="areyouaipage-section__video">
                <video controls>
                    <source src="/Video_AITest.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}