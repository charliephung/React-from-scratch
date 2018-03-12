import React, { Component } from 'react';

class FontSize extends Component {
    changeSize = (size)=> {
        this.props.changeSize(size);
    }

	render() {
		return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Size { this.props.fontSize }px</h3>
                    </div>
                    <div className="panel-body">
                        <button type="button" className="btn btn-success"
                                onClick={ ()=> { this.changeSize(2) }}>
                                Increase</button>

                        <button type="button" className="btn btn-danger"
                                onClick={ ()=> { this.changeSize(-2) }}>
                                Decrease</button>
                    </div>
                </div>
			</div>
		);
	}
}

export default FontSize;
