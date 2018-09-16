import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DropdownArrow from '@material-ui/icons/ArrowDropDown';
import Grid from '@material-ui/core/Grid';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null
    }

    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleMenuOpen(e) {
    this.setState({
      open: true,
      anchorEl: e.currentTarget
    })
  }

  handleLogout() {
    this.setState({
      open: false,
      anchorEl: null
    })
  }

  handleClose() {
    this.setState({
      open: false,
      anchorEl: null
    })
  }

  handle

  render() {
    return (
      <Grid container>
        <Grid item md={3}>
          <Avatar 
            alt={this.props.user.username}
            src={this.props.user.photo}
          />
        </Grid>
        <Grid item md={9}>
          <Button
            onClick={this.handleMenuOpen}
            aria-owns={this.anchorEl ? 'menu' : null}
            aria-haspopup="true"
          >
            {this.props.user.username}
            <DropdownArrow />
          </Button>

          <Menu
            anchorEl={this.anchorEl}
            id="menu"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.props.handleLogoutClick}>Logout</MenuItem>
          </Menu>
        </Grid>
      </Grid>
    );
  }
}

export default Profile;