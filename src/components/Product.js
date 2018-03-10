import React, { Component } from 'react';

class Product extends Component {
	render() {
		return (
			<div>
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<div  className="thumbnail">
						<img src={this.props.img} alt=""/>
						<h3>{this.props.name}</h3>
					 	<p>{this.props.price} Euro </p>
					<button type="button" className="btn btn-block btn-primary">Buy</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Product;
