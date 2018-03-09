import React, { Component } from 'react';
import Demo from './Demo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <div className="alert alert-success">
          <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
          <strong><Demo/></strong>
        </div>
        
      </div>
    );
  }
}

export default App;
