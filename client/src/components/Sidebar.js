import React, { Component } from 'react';
import Profile from './Profile';

class Sidebar extends Component {
  
  render() {
    return (
      <div className="sidebar">
        <Profile
          handleLogoutClick={this.props.handleLogoutClick}
          user={this.props.user}
        />
      </div>
    );
  }
}

export default Sidebar;
