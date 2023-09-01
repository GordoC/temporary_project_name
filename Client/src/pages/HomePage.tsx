import "./HomePage.css"
import BackgroundVideo from "../images/HomePage_video.mp4";
import NavBar from "../components/NavBar"

function HomePage() {
	return (
		<div>
			<NavBar />
			<div className="HomePage">
				<h1 className="HomePage--title">Explore the Beautiful Nature of British Columbia</h1>
				<div className="explore"><h2>Explore</h2></div>
				<div className="learn"><h2>Learn more</h2></div>
				<video id="HomePage--video" autoPlay loop muted>
						<source src={BackgroundVideo} type="video/mp4"/>
				</video>
			</div>
		</div>

    )
}

export default HomePage