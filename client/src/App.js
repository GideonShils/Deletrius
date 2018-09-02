import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

axios.defaults.withCredentials = true  // enable axios post cookie, default false

class App extends Component {
  
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);

    this.state = {
      isAuthenticated: false,
      user: null
    }

    axios.get('http://127.0.0.1:3001/auth/user')
    .then((res) => {
      let userName = res.data.username;

      if (userName) {
        this.setState({
          isAuthenticated: true,
          user: userName
        })
      } else {
        this.setState({
          isAuthenticated: false,
          user: null
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  handleLogoutClick() { 
    axios.get('http://127.0.0.1:3001/auth/logout')
      .then((res) => {
        this.setState({
          isAuthenticated: false,
          user: null
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleFetchClick() {
    axios.get('http://127.0.0.1:3001/api/fetch')
      .then((res) => {
        
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  render() {

    return (
          <div className="login">
            {this.state.isAuthenticated? (
              <div>
                <h1>{'Welcome back ' + this.state.user}</h1>
                <FetchButton onClick={this.handleFetchClick} />
                <LogoutButton onClick={this.handleLogoutClick} />
              </div>
            ) : (
              <div>
                <h1>Please sign in</h1>
                <LoginButton />
              </div>
            )}
          </div>
    );
  }
}

class FetchButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>
          Fetch tweets
        </button>
      </div>
    )
  }
}

class LogoutButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>
          Sign out
        </button>
      </div>
    )
  }
}

class LoginButton extends Component {
  render() {
    return (
      <div>
        <a href="http://127.0.0.1:3001/auth/twitter">
          <button>
            Sign in
          </button>
        </a>
      </div>
    )
  }
}

export default App;
