import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DropdownArrow from '@material-ui/icons/ArrowDropDown';

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
      <div>
        <Avatar 
          alt={this.props.user.username}
          src={this.props.user.photo}
        />

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
          <MenuItem dense="true" onClick={this.props.handleLogoutClick}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

function LogoutButton(props) {
    return (
        <div className="button" onClick={props.onClick}>
          Sign out
        </div>
    )
}

export default Profile;