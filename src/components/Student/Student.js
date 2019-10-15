import React, { Component } from "react";
import axios from "axios";
export default class Student extends Component {
	constructor() {
		super();
		this.state = {
			studentInfo: {}
		};
	}
	componentDidMount() {
		axios
			.get(`http://localhost:3005/students/${this.props.match.params.id}`)
			.then(response => this.setState({ studentInfo: response.data }));
	}
	render() {
		const { first_name, last_name, grade, email } = this.state.studentInfo;
		return (
			<div className='box'>
				<h1>Student</h1>
				<h3>{first_name}</h3>
				<h3>{last_name}</h3>
				<h3>{grade}</h3>
				<h3>{email}</h3>
			</div>
		);
	}
}
