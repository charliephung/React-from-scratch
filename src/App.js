import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "Your name goes here!",
            password: "",
            description: "Share some information :)",
            gender: 0,
            language: "fn",
            status: true
		};
	}

	onHandleChange = (e)=> {
        let target = e.target,
            name = target.name,
            value =  target.type === "checkbox" ? target.checked : target.value;

        this.setState({
            [name] : value
        });
    }
    
    onHandleSubmit = (e)=> {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
        <div>
            <div className="container u-margin-medium">
                <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Form</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={ this.onHandleSubmit }>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" name="username"
                                            onChange={ this.onHandleChange }
                                            value={ this.state.username }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" name="password"
                                            onChange={ this.onHandleChange }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea className="form-control" name="description" cols="30" rows="10"
                                            onChange={ this.onHandleChange }
                                            value={ this.state.description }
                                        >
                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <select name="gender" 
                                                className="form-control" 
                                                required="required" 
                                                value={ this.state.gender }
                                                onChange={ this.onHandleChange }
                                        >
                                            <option value={0}>Male</option>
                                            <option value={1} >Female</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Language</label>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" 
                                                        name="language"  
                                                        value="en" 
                                                        onChange={ this.onHandleChange }
                                                        checked={ this.state.language === "en" }
                                                />
                                                English
                                            </label>
                                            &nbsp; &nbsp; &nbsp;
                                            <label>
                                                <input type="radio" 
                                                        name="language"  
                                                        value="fn" 
                                                        onChange={ this.onHandleChange }
                                                        checked={ this.state.language === "fn" }
                                                />
                                                Finnish
                                            </label>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox"
                                                        name="status" 
                                                        value={ this.state.status }
                                                        onChange={ this.onHandleChange }
                                                        checked={ this.state.status === true }
                                                />
                                                Status
                                            </label>
                                    </div>
                                    
                                    </div>

                                    <button type="submit" className="btn btn-success">Save</button>&nbsp;
                                    <button type="reset" className="btn btn-danger">Delete</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;
