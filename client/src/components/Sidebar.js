import React, { Component } from 'react';
import Profile from './Profile';
import { withStyles } from '@material-ui/core/styles';

import Search from './Search';
import Sort from './Sort';
import StartDate from './StartDate';
import EndDate from './EndDate';

import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import SearchIcon from '@material-ui/icons/Search';
import DateIcon from '@material-ui/icons/DateRange';
import SortIcon from '@material-ui/icons/SwapVert';

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
  
          <List>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <Search
                handleSearchChange={this.props.handleSearchChange}
                handleSearch={this.props.handleSearch}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <SortIcon />
              </ListItemIcon>
              <Sort 
                order={this.props.order}
                handleOrderChange={this.props.handleOrderChange}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <DateIcon />
              </ListItemIcon>
              <StartDate 
                startDate={this.props.startDate}
                handleStartDateChange={this.props.handleStartDateChange}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <DateIcon />
              </ListItemIcon>
              <EndDate 
                endDate={this.props.endDate}
                handleEndDateChange={this.props.handleEndDateChange}
              />
            </ListItem>

          </List>
        </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
