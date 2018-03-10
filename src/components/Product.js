import React, { Component } from 'react';

class Product extends Component {
	// Handler event 1
	constructor(props) {
		super(props);

		// Link onClickBuy of constructor with on onBuy1
		this.onClickBuy = this.onBuy1.bind(this);	
	}
	onBuy1() {
		alert(this.props.name);
	}

	// Handler event 2 (Error)
	// This will call function and execute
	onBuy2(e) {
		console.log("Click buy2");
		console.log(e);
	}

	// Handler event 3
	// without () onClick will bind function onBuy3 
	onBuy3() {
		console.log("Click buy3");
		console.log(this);
	}

	// Handler event 4
	onBuy4 = () => {
		console.log("Click buy4");
		console.log(this);
	}

	render() {
		return (
			<div>
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<div  className="thumbnail">
						<img src={this.props.img} alt=""/>
						<h3>{this.props.name}</h3>
					 	<p>{this.props.price} Euro </p>
					<button type="button" onClick={ this.onClickBuy } className="btn btn-block btn-primary">Buy1</button>
					<button type="button" onClick={ this.onBuy2(this) } className="btn btn-block btn-success">Buy2 (Error)</button>
					<button type="button" onClick={ this.onBuy3 } className="btn btn-block btn-danger">Buy3</button>
					<button type="button" onClick={ this.onBuy4 } className="btn btn-block btn-warning">Buy4</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Product;
