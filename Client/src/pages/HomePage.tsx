import BackgroundVideo from "../images/HomePage_video.mp4";

function HomePage() {
    return (
        <div className="HomePage">
            <h1 className="HomePage--title">Explore the Beautiful Nature of British Columbia</h1>
            <video id="HomePage--video" autoPlay loop muted>
                <source src={BackgroundVideo} type="video/mp4"/>
            </video>
        </div>
    )
}

export default HomePage