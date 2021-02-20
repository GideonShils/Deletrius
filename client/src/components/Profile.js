import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DropdownArrow from '@material-ui/icons/ArrowDropDown';
import { withStyles } from '@material-ui/core/styles';
import Avater from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 2,
  },
  avatar: {
    width: 100,
    height: 100,
    margin: '0 auto'
  },
  profileButton: {
    marginTop: theme.spacing.unit * 2
  }
})

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null
    }

    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleMenuOpen(e) {
    this.setState({
      anchorEl: e.currentTarget
    })
  }

  handleClose() {
    this.setState({
      anchorEl: null
    })
  }

  render() {
    const open = Boolean(this.state.anchorEl);
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Avater
          alt={this.props.user.username}
          src={this.props.user.photo}
          className={classes.avatar}
        />
        
        <Button
          aria-owns={open ? "user-menu" : null}
          aria-haspopup="true"
          onClick={this.handleMenuOpen}
          className={classes.profileButton}
        >
          {this.props.user.username}
          <DropdownArrow />
        </Button>

        <Menu
          id="user-menu"
          anchorEl={this.anchorEl}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.props.handleLogoutClick}>Logout</MenuItem>
          <MenuItem onClick={this.props.handleFetchClick}>Fetch Tweets</MenuItem>
          <MenuItem disabled onClick={this.props.handleFetchClick}>Import Archive</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);