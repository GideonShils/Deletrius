import React, { Component } from 'react';

class LoggedOutContainer extends Component {
  
  render() {
    return (
      <div className="loggedOutContainer">
        <Header />
        <LoginButton />
      </div>
    );
  }
}

function Header(props) {
  return (
    <div className ="header">
      <h1>Twitter Delete</h1>
    </div>
  )
}

function LoginButton(props) {
    return (
        <a href="http://127.0.0.1:3001/auth/twitter">
          <button>
            Sign in
          </button>
        </a>
    )
}

export default LoggedOutContainer;
