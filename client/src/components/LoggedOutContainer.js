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

    if (window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    ) {
      loginUrl = 'http://127.0.0.1:3001/auth/twitter';
    } else {
      loginUrl = 'https://deletriusv1.herokuapp.com/auth/twitter';
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
