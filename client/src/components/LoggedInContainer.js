import React, { Component } from 'react';
import SideBar from './Sidebar';
import Content from './Content';

class LoggedInContainer extends Component {
  render() {
    return (
      <div className="loggedInContainer">
        <SideBar 
          handleLogoutClick={this.props.handleLogoutClick} 
          user={this.props.user}
        />
        <Content />
      </div>
    );
  }
}

export default LoggedInContainer;
