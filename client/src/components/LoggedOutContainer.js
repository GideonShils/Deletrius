import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    textAlign: 'center',
    background: '#4253AF',
    height: '100%',
    padding: theme.spacing.unit * 10
  },
  button: {
    marginTop: theme.spacing.unit * 10,
    textTransform: 'none'
  },
  type: {
    color: '#fff',
    fontWeight: 100
  }
})

class LoggedOutContainer extends Component {
  
  render() {
    const { classes } = this.props;
    let loginUrl;

    if (window.location.href == 'https://twitter-delete.herokuapp.com/') {
      loginUrl = 'https://twitter-delete.herokuapp.com/auth/twitter';
    } else {
      loginUrl = 'http://127.0.0.1:3001/auth/twitter';
    }

    return (
      <div className={classes.root}>
        <Typography
          className={classes.type}
          variant="display3"
        >
          Twitter Delete
        </Typography>

        <Typography
          variant="subheading"
          className={classes.type}
        >
          Quickly find and delete old tweets in bulk
        </Typography>

        <Button
          color="secondary" 
          href={loginUrl}
          variant="contained"
          className={classes.button}
        >
          Login with twitter
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(LoggedOutContainer);
