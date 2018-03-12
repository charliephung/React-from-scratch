import React, { Component } from 'react';

class Reset extends Component {
	onReset = ()=> {
		this.props.onReset();
	}

	render() {
		return (
			<div>
            	<button onClick={ this.onReset } type="button" className="btn btn-primary">Reset</button>
			</div>
		);
	}
}

export default Reset;
