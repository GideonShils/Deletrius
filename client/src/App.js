import React, { Component } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import LoggedInContainer from './components/LoggedInContainer';
import LoggedOutContainer from './components/LoggedOutContainer';
import './App.css';

axios.defaults.withCredentials = true  // enable axios post cookie, default false

class App extends Component {
  
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);

    let username = localStorage.getItem('username');
    let photo = localStorage.getItem('photo')
    let userId = localStorage.getItem('userId');

    // If user was stored in local storage, set user object and state
    if (username) {
      let user = {
        username: username,
        photo: photo,
        userId: userId
      }
      this.state = {
        isAuthenticated: true,
        user: user
      }
    } else {
      this.state = {
        isAuthenticated: false,
        user: null
      }

      // If user wasn't in local storage, check the server
      this.checkAuth();
    }
  }

  // Check if user logged in and set localstorage
  checkAuth() {
    axios.get('/auth/user')
    .then((res) => {
      let user = res.data;

      if (user) {
        localStorage.setItem('username', user.username);
        localStorage.setItem('photo', user.photo);
        localStorage.setItem('userId', user.userId);
        this.setState({
          isAuthenticated: true,
          user: user,
          userId: user.userId
        })
      }
    })
    .catch((err) => {
      console.error(err);
    })
  }

  // On logout, clear localstorage and reset state
  handleLogoutClick() {
    localStorage.clear();
    axios.get('/auth/logout')
    .then((res) => {
      this.setState({
        isAuthenticated : false,
        user: null
      })
    })
    .catch((err) => {
      console.error(err);
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        {/* If authenticated, show logged in contaner. Otherwise, show logged out container */}
        {this.state.isAuthenticated ? (
          <React.Fragment>
            <LoggedInContainer 
              user={this.state.user}
              handleLogoutClick={this.handleLogoutClick}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <LoggedOutContainer />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default App;
