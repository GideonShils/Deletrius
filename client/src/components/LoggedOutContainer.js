import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class LoggedOutContainer extends Component {
  
  render() {
    return (
      <div className="loggedOutContainer">
        <Header />
        <Button
          color="primary" 
          href="http://127.0.0.1:3001/auth/twitter"
          variant="contained"
        >
          Login with twitter
        </Button>
      </div>
    );
  }
}

function Header(props) {
  return (
    <div className ="header">
      <h1>Twitter Delete</h1>
    </div>
  )
}

export default LoggedOutContainer;
