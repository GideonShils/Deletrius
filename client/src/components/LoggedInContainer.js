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
      fetching: false,
      tweetList: [],
      count: 0
    }

    this.handleFetchClick = this.handleFetchClick.bind(this);
  }

  handleFetchClick() {
    this.setState({
      fetching: true
    })
    console.log('fetching...');
    axios.get('http://127.0.0.1:3001/api/fetch')
    .then((res) => {
      console.log('loading...');
      let url = 'http://127.0.0.1:3001/api/user/' + this.props.user.userId;
      axios.get(url, {
        params: {
          page: 0,
          limit: 25,
          order: 'newFirst',
          startDate: new Date('2006-03-21'),
          endDate: new Date(),
          search: ''
        }
      })
      .then((res) => {
        console.log('changing state...');
        localStorage.setItem('fetched', true);
        console.log(res.data.numPages)
        this.setState({
          tweetList: res.data.tweets,
          count: res.data.count,
          fetching: false,
          fetched: true
        })
      })
      .catch((err) => {
        console.log(err)
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
            userId={this.props.user.userId}
            count={this.state.count}
            tweetList={this.state.tweetList}
          />
        </Grid>
      </Grid>
    );
  }
}

export default LoggedInContainer;
