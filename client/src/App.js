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

    if (username) {
      let user = {
        username: username,
        photo: photo
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
        this.setState({
          isAuthenticated: true,
          user: user
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
          <div>
            {console.log("Rendering authenticated")}
            <LoggedInContainer 
              user={this.state.user}
              handleLogoutClick={this.handleLogoutClick} 
            />
          </div>
        ) : (
          <div>
            {console.log("Rendering not authenticated")}
            <LoggedOutContainer />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
