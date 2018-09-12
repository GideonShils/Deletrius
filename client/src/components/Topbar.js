import React, { Component } from 'react';

class Topbar extends Component {
  
  render() {
    return (
      <div className="topbar">
        <div>Select all</div>
        <div>Delete selected</div>
        <div>Sort ▼</div>
      </div>
    );
  }
}

export default Topbar;
