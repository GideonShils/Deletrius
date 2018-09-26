import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import logo from '../assets/logo.svg';
import throwaway from '../assets/twitter_throwaway.png';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
  root: {
    textAlign: 'center',
    height: '100%',
    background: '#fff'
  },
  hero: {
    background: '#F9FAFB',
    padding: theme.spacing.unit * 10
  },
  button: {
    marginTop: theme.spacing.unit * 5,
    textTransform: 'none'
  },
  type: {
    fontWeight: 100,
    padding: theme.spacing.unit * 1
  },
  features: {
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 10,
    background: '#fff'
  },
  featureText: {
    textAlign: 'left',
    marginTop: theme.spacing.unit * 7
  },
  throwaway: {
    textAlign: 'center'
  },
  footer: {
    background: '#4253AF',
    textColor: '#fff',
    padding: theme.spacing.unit * 2
  },
  footerType: {
    color: '#fff',
    marginBottom: theme.spacing.unit * 1,
    '& a': {
      color: '#fff',
      textDecoration: 'none'
    }
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
      loginUrl = 'http://www.deletrius.com/auth/twitter';
    }

    return (
      <div className={classes.root}>
        <div className={classes.hero}>
          <img src={logo} alt="logo" width="100"/>
          <Typography
            className={classes.type}
            variant="display3"
          >
            Deletrius
          </Typography>

          <Typography
            variant="subheading"
            className={classes.type}
          >
            Quickly find and delete old tweets in bulk
          </Typography>

          <Button
            color="primary" 
            href={loginUrl}
            variant="contained"
            className={classes.button}
          >
            Login with twitter
          </Button>
        </div>
        <Divider />
        <div className={classes.features}>
          <Grid container>
            <Grid item md={4} sm={12} className={classes.throwaway}>
              <img src={throwaway} alt="throwaway" width="150"/>
            </Grid>
            <Grid item md={8} sm={12} className={classes.featureText}>
              <Typography className={classes.type} variant="display1">
                Need to clean up your past?
              </Typography>
              <Typography className={classes.type} variant="subheading">
                Deletrius lets you search your history based on keyword or date range, delete all tweets that match your search, or select tweets to delete.
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Divider />
        <div className={classes.footer}>
        <Typography className={classes.footerType} variant="subheading">
          Created by <a href="http://www.gideonshils.com">Gideon Shils</a>
        </Typography>
        <a href="http://www.github.com/gideonshils/deletrius">
          <SvgIcon color="action">
              <path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" />
          </SvgIcon>
        </a>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LoggedOutContainer);
