import React, { Component } from "react";
import FirstChild from './FirstChild';

class FormContainer extends Component {
	render() {
		return (
			<React.Fragment>
				<h1>Hello World!</h1>
				<FirstChild />
			</React.Fragment>
		);
	}
}

export default FormContainer;