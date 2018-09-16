import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
//import Grid from '@material-ui/core/Grid';

class LoggedOutContainer extends Component {
  
  render() {
    return (
      <div>
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
      <h2>Quickly find and delete old tweets in bulk</h2>
    </div>
  )
}

export default LoggedOutContainer;
