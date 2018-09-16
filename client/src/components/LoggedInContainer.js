import React, { Component } from 'react';
import SideBar from './Sidebar';
import Content from './Content';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

class LoggedInContainer extends Component {

  constructor(props) {
    super(props)
    let fetched = localStorage.getItem('fetched') ? true : false;

    this.state = {
      fetched: fetched,
      fetching: false
    }

    this.handleFetchClick = this.handleFetchClick.bind(this);
  }

  handleFetchClick() {
    this.setState({
      fetching: true
    })
    axios.get('http://127.0.0.1:3001/api/fetch')
    .then((res) => {
      console.log('setting state')
      localStorage.setItem('fetched', true);
      this.setState({
        fetched: true,
        fetching: false
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <Grid container spacing={0}>
        <Grid item md={3}>
          <SideBar 
            handleLogoutClick={this.props.handleLogoutClick} 
            user={this.props.user}
            fetched={this.state.fetched}
            handleFetchClick={this.handleFetchClick}
          />
        </Grid>
        <Grid item md={9}>
          <Content 
            fetched={this.state.fetched}
            fetching={this.state.fetching}
            count={this.state.count}
            rowsPerPage={this.state.rowsPerPage}
          />
        </Grid>
      </Grid>
    );
  }
}

export default LoggedInContainer;
