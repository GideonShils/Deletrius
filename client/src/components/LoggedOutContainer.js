import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
//import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    textAlign: 'center'
  },
  button: {
    marginTop: 50
  }
}

class LoggedOutContainer extends Component {
  
  render() {
    return (
      <div className={this.props.classes.root}>
        <h1>Twitter Delete</h1>
        <h2>Quickly find and delete old tweets in bulk</h2>
        <Button
          color="primary" 
          href="http://127.0.0.1:3001/auth/twitter"
          variant="contained"
          className={this.props.classes.button}
        >
          Login with twitter
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(LoggedOutContainer);
