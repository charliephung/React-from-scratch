import React, { Component } from 'react';
import Product from './components/Product';

class App extends Component {
	onUserClick() {
		console.log("Click me");
	}

	// get value of rels.name
	onButtonClick = () => {
		console.log(this.refs.name.value);
	}

	render() {
		let products = [
			{
				id: 1,
				name: "Bphone X",
				price: 15,
				img: "https://images.unsplash.com/photo-1506777775294-c79f090bac1e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0553e3577db86d0840f7fa3397aa8&auto=format&fit=crop&w=400&q=60",
				status: true
			},
			{
				id: 2,
				name: "Aphone X",
				price: 151,
				img: "https://images.unsplash.com/photo-1516921501160-db0dc3e89d6e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c13feffc48bd1501547366efcf27a502&auto=format&fit=crop&w=400&q=60",
				status: false
			},
			{
				id: 3,
				name: "Cphone X",
				price: 125,
				img: "https://images.unsplash.com/photo-1510584948237-34d9743bfe79?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f8ee06ab6c340d32c125d00de2fb2b2a&auto=format&fit=crop&w=400&q=60",
				status: true
			},
			{
				id: 4,
				name: "Dphone X",
				price: 315,
				img: "https://images.unsplash.com/photo-1518997521619-1feb2234da82?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c015e9ccb001da57b1319959d9b8a03f&auto=format&fit=crop&w=400&q=60",
				status: false
			},
		];

		let elements = products.map((product, index)=>{
			if (product.status) {
				return(
					<Product
					key = {product.id}
					name = {product.name}
					img = {product.img}
					price = {product.price}
					/>
				);
			}
			return "";
		});
		
		return (
			<div>
				<nav className="navbar navbar-inverse">
					<a className="navbar-brand" >React</a>
				</nav>
				<div className="container">
					<div className="row">
						<div className="row">
							
							<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
								<div className="panel panel-danger">
									<div className="panel-body">
									   	<div className="form-group">
										<label >Product Name</label>
										<input className="form-control" type="text" ref="name"/>
									</div>
									{/* add event handle when click button */}
									<button onClick={ this.onButtonClick } type="button" className="btn btn-large btn-success">
										Add product										
									</button>
									</div>
								</div>
							</div>
							
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								{elements}
							</div>
							
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								{/* Events find from facebook.github.io/react/docs/event.html */}
								<button type="button" className="btn btn-success" onClick={ this.onUserClick }>
									Click me
								</button>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
