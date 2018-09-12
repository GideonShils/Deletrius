import React, { Component } from 'react';

class Profile extends Component {
  
  render() {
    console.log(this.props.user)
    return (
      <div className="profile">
        <div className="userInfo">
          <img src={this.props.user.photo} alt="profile" />
          <h2>{this.props.user.username}</h2>
        </div>
        <LogoutButton onClick={this.props.handleLogoutClick}/>
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
