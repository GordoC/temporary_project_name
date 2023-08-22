// ReactDOM.render(<h1>Hello, everyone!</h1>);
import "./RegistrationPage.css"
import Traveller from "../images/traveller-logo.png"

function RegistrationPage() {
	return (
		<div className="register-page">
			<img src={Traveller} className="traveller-logo"></img>
			<div className="client-survey">
				<h1>Register</h1>
				<h2>Welcome to the Hiking Blogger Family</h2>
				<h3>Already Signed Up? Sign In</h3>
				<div className="fill-info">
					<div className="name">
						<input type="text" placeholder="First name" />
						<input type="text" placeholder="Last name" />
					</div >
					<input className="email" type="text" placeholder="Your Email Address" />
					<input className="passwrod" type="text" placeholder="Create a Password" />
				</div>
				<div className="location">
					<div className="country">
						<label>Country of Residence</label>
						<select>
								<option value="option">Select an option</option>
								<option value="canada">Canada</option>
								<option value="usa">USA</option>
							</select>
					</div>
					<div className="province">
						<label>Province (State) of Residence</label>
						<select>
							<option value="option">Select an option</option>
							<option value="bc">BC</option>
							<option value="on">ON</option>
						</select>
					</div>
				</div>
				<button>SIGN UP</button>
			</div>
	
			</div>
	)
}

export default RegistrationPage