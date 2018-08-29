import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      user: null,
      token: ''
    };
  };

  logout = () => { 
    this.setState({
      isAuthenticated: false,
      user: null,
      token: ''
    })
  };

  render() {
    return (
      <div className="App">
        <a href="http://127.0.0.1:3001/auth/twitter" className="App-intro">
          Login
        </a>
        
        <br/>
        <a href="http://127.0.0.1:3001/fetch/" className="App-intro">
          Fetch tweets
        </a>
        { /*
        <br/>
        <a href="http://127.0.0.1:3001/import/" className='App-intro'>
          Import from archive
        </a>
        <form ref="uploadForm" method="POST" action="http://127.0.0.1:3001/import" enctype="multipart/form-data">
          <strong>Upload archive</strong> 
          <br/>
          <input type="file" name="file" />
          <br/>
          <input type="submit" value="upload!" />
        </form>
        */ }
      </div>
    );
  }
}

export default App;
