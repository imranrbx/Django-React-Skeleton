import React, { Component } from 'react';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			val: 'Default',
		};
		this.outputMessage = this.outputMessage.bind(this);
	}
	outputMessage(e) {
		this.setState({ val: e.target.value });
	}
	render() {
		return (
			<div>
				<h1> {this.state.val}</h1>
				<input
					type='text'
					name=''
					id=''
					value={this.state.val}
					onChange={this.outputMessage}
				/>
			</div>
		);
	}
}
