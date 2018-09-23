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

      this.checkAuth();
    }
  }

  checkAuth() {
    axios.get('http://127.0.0.1:3001/auth/user')
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
      console.log(err);
    })
  }

  handleLogoutClick() {
    localStorage.clear();
    axios.get('http://127.0.0.1:3001/auth/logout')
    .then((res) => {
      this.setState({
        isAuthenticated : false,
        user: null
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        {this.state.isAuthenticated ? (
          <React.Fragment>
            {console.log("Rendering authenticated")}
            <LoggedInContainer 
              user={this.state.user}
              handleLogoutClick={this.handleLogoutClick}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            {console.log("Rendering not authenticated")}
            <LoggedOutContainer />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default App;
