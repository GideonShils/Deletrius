import React, { Component } from 'react';
import SideBar from './Sidebar';
import Content from './Content';

import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  sidebar: {
    background: '#fff',
    zIndex: 0,
    boxShadow: '1px 0px 8px 0px rgba(0,0,0,0.15)',
    width: '25%',
    float: 'left',
    height: '100%',
    position: 'fixed'
  },
  content: {
    width: '75%',
    float: 'right'
  }
}

class LoggedInContainer extends Component {

  constructor(props) {
    super(props)
    let fetched = localStorage.getItem('fetched') ? true : false;

    this.state = {
      fetched: fetched,
      fetching: false,
      count: 0,
      startDate: new Date('2006-03-20T00:00:00.000+00:00'),
      endDate: new Date(),
      order: 'newFirst',
      searchVal: '',
      search: ''
    }
    
    this.handleFetchClick = this.handleFetchClick.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleOrderChange = this.handleOrderChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    this.setState({searchVal: e.target.value})
  }

  handleSearch(e) {
    if (e.keyCode === 13) {
      this.setState({search: this.state.searchVal});
    }
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
    axios.get('/api/fetch')
    .then((res) => {
      localStorage.setItem('fetched', true);
      this.setState({
        fetching: false,
        fetched: true
      })
    })
    .catch((err) => {
      console.error(err)
    })
  }
  
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.sidebar}>
          <SideBar 
            order={this.state.order}
            handleOrderChange={this.handleOrderChange}
            startDate={this.state.startDate}
            handleStartDateChange={this.handleStartDateChange}
            endDate={this.state.endDate}
            handleEndDateChange={this.handleEndDateChange}
            handleLogoutClick={this.props.handleLogoutClick} 
            user={this.props.user}
            fetched={this.state.fetched}
            handleFetchClick={this.handleFetchClick}
            handleSearch={this.handleSearch}
            handleSearchChange={this.handleSearchChange}
          />
        </div>
        <div className={classes.content}>
          <Content 
            fetched={this.state.fetched}
            fetching={this.state.fetching}
            userId={this.props.user.userId}
            count={this.state.count}
            order={this.state.order}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            search={this.state.search}
            handleFetchClick={this.handleFetchClick}
            className={classes.content}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LoggedInContainer);
