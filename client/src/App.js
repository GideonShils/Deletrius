import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Twitter Delete</h1>
        </header>
        <a href="/api/auth/twitter" className="App-intro">
          Login with twitter
        </a>
      </div>
    );
  }
}

export default App;
