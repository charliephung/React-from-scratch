import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import FontSize from './components/FontSize';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: "red",
			fontSize: 14
		}
	}

	onGetColor = (color) => {
		this.setState({
			color : color
		});
	}

	changeSize = (size) => {
		if (this.state.fontSize + size >= 10 && this.state.fontSize + size <= 50) {
			this.setState({
				fontSize: this.state.fontSize + size
			});
		}		
	}

	onReset = ()=> {
		this.setState({
			fontSize: 14
		});
	}
	
	render() {
		return (
			<div>
				<nav className="navbar navbar-inverse">
					<a className="navbar-brand" >React</a>
				</nav>
				<div className="container">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<ColorPicker color={ this.state.color } 
									onGettingColor={ this.onGetColor }/>
					</div>
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<FontSize fontSize={ this.state.fontSize }
									changeSize={ this.changeSize }/>
						<Reset onReset={ this.onReset }/>
					</div>
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<Result color={ this.state.color } 
								fontSize={ this.state.fontSize }/>
					</div>
					
				</div>
			</div>
		);
	}
}

export default App;
