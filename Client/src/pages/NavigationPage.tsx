import "./NavigationPage.css"
import ProfilePage from "./ProfilePage"
import Search from "../images/search_logo.png"
import Trending from "../images/trending_logo.png"

function NavigationPage() {
  return (
    <div>
      <ProfilePage />
      <div className="search-bar">
        <input type="text" placeholder="search up for your favorite trails" />
        <button>find trail</button>
        <img src={Search} alt="search-logo" className="search-logo" />
        <img src={Trending} alt="trending-logo" className="trending-logo" />
      </div>
    </div>
  )
}

export default NavigationPage