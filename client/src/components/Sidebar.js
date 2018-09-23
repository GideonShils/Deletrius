import React, { Component } from 'react';
import Profile from './Profile';
import { withStyles } from '@material-ui/core/styles';

import Search from './Search';
import Sort from './Sort';
import DateRange from './DateRange';

const styles = {
  root: {
    
  }
}

class Sidebar extends Component {

  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
          <Profile
            user = {this.props.user}
            handleFetchClick={this.props.handleFetchClick}
            handleLogoutClick={this.props.handleLogoutClick}
          />
        
          <Search
            handleSearchChange={this.props.handleSearchChange}
            handleSearch={this.props.handleSearch}
          />

          <Sort 
            order={this.props.order}
            handleOrderChange={this.props.handleOrderChange}
          />

          <DateRange 
            startDate={this.props.startDate}
            handleStartDateChange={this.props.handleStartDateChange}
            endDate={this.props.endDate}
            handleEndDateChange={this.props.handleEndDateChange}
          />
        </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
