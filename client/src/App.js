import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Twitter Delete</h1>
          <p>Need to bulk delete your tweets? You've come to the right place.</p>
        </header>
        <a href="http://127.0.0.1:3001/auth/twitter" className="App-intro">
          Login with twitter
        </a>
        <br/>
        <a href="http://127.0.0.1:3001/fetch/" className="App-intro">
          Fetch tweets
        </a>
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
      </div>
    );
  }
}

export default App;
