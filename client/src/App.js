import React, { Component } from 'react';
import axios from 'axios';
import LoggedInContainer from './components/LoggedInContainer';
import LoggedOutContainer from './components/LoggedOutContainer';
import './App.css';

axios.defaults.withCredentials = true  // enable axios post cookie, default false

class App extends Component {
  
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);

    this.state = {
      isAuthenticated : false,
      user : null
    }
  }

  componentDidMount() {
    console.log('mounted! checking...');
    this.checkAuth();
  }

  handleLogoutClick() {
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

  checkAuth() {
    axios.get('http://127.0.0.1:3001/auth/user')
    .then((res) => {
      let user = res.data;
  
      if (user) {
        this.setState({
          isAuthenticated : true,
          user: user
        })
      } else {
        this.setState({
          isAuthenticated : false,
          user : null
        })
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  render() {
    return (
     this.state.isAuthenticated ? (
       <div>
        {console.log('authenticated')}
        <LoggedInContainer 
          user={this.state.user}
          handleLogoutClick={this.handleLogoutClick} 
        />
       </div>
      ) : (
        <div>
        {console.log('not authenticated')}
        <LoggedOutContainer />
       </div>
      )
    );
  }
}

export default App;
