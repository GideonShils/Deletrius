import React, { Component } from 'react';
import SideBar from './Sidebar';
import Content from './Content';
import Grid from '@material-ui/core/Grid';

class LoggedInContainer extends Component {

  render() {
    return (
      <Grid container spacing={0}>
        <Grid item md={3}>
          <SideBar 
            handleLogoutClick={this.props.handleLogoutClick} 
            user={this.props.user}
          />
        </Grid>
        <Grid item md={9}>
          <Content />
        </Grid>
      </Grid>
    );
  }
}

export default LoggedInContainer;
