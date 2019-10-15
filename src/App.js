import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import Routes from "./routes";
import Home from "./components/Home/Home";
import About from "./components/About/About";
export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<nav className='nav'>
						{Routes}
						<div>WestSide University</div>
						<div className='link-wrap'>
							<Link to='/' className='links'>
								Home
							</Link>
							<Link to='/about' className='links'>
								About
							</Link>
						</div>
					</nav>
				</div>
			</Router>
		);
	}
}
