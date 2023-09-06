import './App.css';
import RegistrationPage from "./pages/RegistrationPage";
import Card from './cards/Card';
import TrailProfile from './TrailInfoPage/TrailProfile';
import trailphoto from '../images/trail_photo.jpg';

//example constant 
const example_trail = {
    photo: trailphoto,
    name: "Lion's bay",
    rating: 4,
    difficulty: "medium",
  };

function App() {
	return (
		// <div className="App">
		//   <header className="App-header">
		//     <img src={logo} className="App-logo" alt="logo" />
		//     <p>
		//       Edit <code>src/App.tsx</code> and save to reload.
		//     </p>
		//     <a
		//       className="App-link"
		//       href="https://reactjs.org"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       Learn React
		//     </a>
		//   </header>
		// </div>
		<div>
			<Card photo={trailphoto} name="Lion's bay" rating={4} difficulty='medium' />
		</div>
	)
}

export default App;
