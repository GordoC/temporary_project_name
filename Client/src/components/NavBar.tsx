import "./NavBar.css"
import Logo from "../images/mountain_logo.jpeg"

function NavBar() {
  return (
    <div className="nav-bar">
      <img className="navbar--logo" src={Logo}></img>
      <ul className="navbar--items">
        <div className="item">
          <li>Experience</li>
          <div></div>
        </div>
        <div className="item">
          <li>Search</li>
          <div></div>
        </div>
        <div className="item">
          <li className="sign">Sign Up</li>
        </div>
      </ul>
    </div>
  );
}

export default NavBar