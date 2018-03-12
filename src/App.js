import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);

		// Define default state
		this.state = {
			products : [
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
			],
			isActive : true
		}
	}

	// toggle .state.isActive
	onSetState = () => {
		this.setState({
			isActive : !this.state.isActive
		});
	}

	render() {
		let elements = this.state.products.map((product, index)=>{
			// Loop through state
			if (this.state.isActive) {
				if (product.status ) {
					return(
							<tr key={ index } >
								<td>{ index }</td>
								<td>{ product.name }</td>
								<td>{ product.price }</td>
							</tr>
					);
				}
			return null;
			}
			return null;
		});
		
		return (
			<div>
				<nav className="navbar navbar-inverse">
					<a className="navbar-brand" >React</a>
				</nav>
				<div className="container">
					<div className="row">
						<div className="row">
							<table className="table table-hover">
								<thead>
									<tr>
										<th>Index</th>
										<th>Name</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									{elements}
								</tbody>
							</table>
							<button onClick={ this.onSetState } type="button" className="btn btn-large btn-warning">
								Active : { this.state.isActive === true ? "true" : "false"}
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
