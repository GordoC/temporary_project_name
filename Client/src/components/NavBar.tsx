import Logo from "../images/mountain_logo.jpeg"

function NavBar() {
    return (
        <div className="nav-bar">
            <img className="navbar--logo" src={Logo}></img>
            <ul className="navbar--items">
                <li>Experience</li>
                <li>Search</li>
                <li>Sign Up</li>
            </ul>
        </div>
    );
 }

export default NavBar