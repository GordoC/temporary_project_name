import './App.css';
import HomePage from './pages/HomePage';
import NavigationPage from './pages/NavigationPage';
import RegistrationPage from "./pages/RegistrationPage";
import Card from './components/Card';
import Traveller from '../src/images/traveller-logo.png'



//type of the trail
// interface props{
//   photo: string;
//   name: string;
//   rating: number;
//   difficulty: string;
// }



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
      {/* <HomePage /> */}
      {/* <NavigationPage /> */}
      {/* <RegistrationPage /> */}
      <Card photo={Traveller} name={"Lion's bay"} rating={4} difficulty='medium' />
    </div>
  )
}

export default App;
