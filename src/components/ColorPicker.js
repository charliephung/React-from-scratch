import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colors : ["red", "green", "blue", "orange", "yellow", "purple", "gray", "black" ]
        };
    }

    displayColor = (color) => {
        return(
            { backgroundColor: color }
        );
    }

    setActiveColor(color) {
        this.props.onGettingColor(color)
    }

	render() {

        let elementColors = this.state.colors.map((color, index) => {
            return(
                <span key={ index }
                    style={ this.displayColor(color)} 
                    className={ this.props.color === color ? "active" : "" }
                    onClick={() => this.setActiveColor(color) }>
                </span>
                
            );
        })

		return (
            <div className="container">
                <div className="panel panel-danger">
                        <div className="panel-heading">
                            <h3 className="panel-title">Color picker</h3>
                        </div>
                        <div className="panel-body">
                             { elementColors }
                        </div>
                </div>
            </div>
		);
	}
}

export default ColorPicker;
