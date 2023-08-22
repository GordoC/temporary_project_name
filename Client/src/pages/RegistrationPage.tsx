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
					<input type="text" />
					<input type="text" />
					<input type="text" />
					<input type="text" />
				</div>
				<div>
					<label className="country">Country of Residence</label>
					<label className="province">Province (State) of Residence</label>
				</div>
				<div>
					<select id="countries" className="countries">
							<option value="canada">Canada</option>
							<option value="usa">USA</option>
					</select>
					<select id="provinces" className="provinces">
						<option value="bc">BC</option>
						<option value="on">ON</option>
					</select>
				</div>
				<button>SIGN UP</button>
			</div>
	
			</div>
	)
}

export default RegistrationPage