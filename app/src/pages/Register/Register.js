import React, { Component } from 'react';
import './Login.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import { Motion, spring } from 'react-motion';
import NavigationPanel from '../../components/Login/NavigationPanel';
import Modal from '../../components/Login/Modal';

class Register extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mounted: false
		};
	}

	componentDidMount() {
		this.setState({ mounted: true });
		console.log("fired")
	}

	handleSubmit = (e) => {
		this.setState({ mounted: false });
		e.preventDefault();
		console.log("fired")
	}

	render() {
		const { mounted } = this.state;

		let child;
		let test = 12;

		if (mounted) {
			child = (
				<div className="App_test">
					<NavigationPanel></NavigationPanel>
					<Modal onSubmit={this.handleSubmit} />
				</div>
			);
		}

		return (
			<div className="App">
				<ReactCSSTransitionGroup
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
					{child}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

export default Register;
