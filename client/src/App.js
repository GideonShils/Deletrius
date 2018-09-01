import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      user: null
    };
  };

  logout = () => { 
    this.setState({
      isAuthenticated: false,
      user: null
    })
  };

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

class Login extends Component {
  render() {
    return (
      <a href="http://127.0.0.1:3001/auth/twitter">Sign in with Twitter</a>
    )
  }
}

export default App;
