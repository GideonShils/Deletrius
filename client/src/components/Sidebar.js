import React, { Component } from 'react';
import Profile from './Profile';
import Grid from '@material-ui/core/Grid';


// Search
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

// Datepicker
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import DatePicker from 'material-ui-pickers/DatePicker';

// Sort
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
 

class Sidebar extends Component {

  render() {
    return (
      <Grid container spacing={16} direction="column" alignItems="flex-start">
        <Grid item>
          <Profile 
            user = {this.props.user}
            handleFetchClick={this.props.handleFetchClick}
            handleLogoutClick={this.props.handleLogoutClick}
          />
        </Grid>

        {/* Sort */}
        <Grid item>
          <FormControl>
            <InputLabel shrink htmlFor="order-label-placeholder">
              Sort
            </InputLabel>
            <Select
              value={this.props.order}
              onChange={this.props.handleOrderChange}
              input={<Input name="order" id="order-label-placeholder" />}
              displayEmpty
              name="order"
            >
              <MenuItem value="newFirst">Newest first</MenuItem>
              <MenuItem value="oldFirst">Oldest first</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* Search */}
        <Grid item>
          <Input
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>}
            onChange={this.props.handleSearchChange}
            onKeyDown={this.props.handleSearch}
            placeholder="Search..."
          />
        </Grid>
        {/* Datepicker */}
        <Grid item>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DatePicker
              value={this.props.startDate}
              onChange={this.props.handleStartDateChange}
              label="Start date"
              disableFuture
              showTodayButton
              autoOk
              format="MMM Do, YYYY" // Moment formatting 
              minDate="2006-03-21"
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DatePicker
                value={this.props.endDate}
                onChange={this.props.handleEndDateChange}
                label="End date"
                disableFuture
                showTodayButton
                autoOk
                format="MMM Do, YYYY" // Moment formatting
                minDate="2006-03-21"
              />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    );
  }
}

export default Sidebar;
