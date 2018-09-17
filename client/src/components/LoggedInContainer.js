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
      count: 0,
      startDate: new Date('2006-03-21T00:00:00'),
      endDate: new Date(),
      order: 'newFirst'
    }
    
    this.handleFetchClick = this.handleFetchClick.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleOrderChange = this.handleOrderChange.bind(this);
  }

  handleStartDateChange(date) {
    this.setState({
      startDate: date.toDate()
    })
  }

  handleEndDateChange(date) {
    this.setState({
      endDate: date.toDate()
    })
  }

  handleOrderChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleFetchClick() {
    this.setState({
      fetching: true
    })
    axios.get('http://127.0.0.1:3001/api/fetch')
    .then((res) => {
      localStorage.setItem('fetched', true);
      this.setState({
        fetching: false,
        fetched: true
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <Grid container spacing={0}>
        <Grid item md={3}>
          <SideBar 
            order={this.state.order}
            handleOrderChange={this.handleOrderChange}
            startDate={this.state.startDate}
            handleStartDateChange={this.handleStartDateChange}
            endDate={this.state.endD}
            handleEndDateChange={this.handleEndDateChange}
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
            order={this.state.order}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
          />
        </Grid>
      </Grid>
    );
  }
}

export default LoggedInContainer;
