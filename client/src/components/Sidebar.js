import React, { Component } from 'react';
import Profile from './Profile';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';


// Search
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';

// Datepicker
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import DatePicker from 'material-ui-pickers/DatePicker';

// Sort
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

// Import
import Button from '@material-ui/core/Button';
 

class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startDate: new Date('2006-03-21T00:00:00'),
      endDate: new Date(),
      sort: 1
    }

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleStartDateChange(date) {
    this.setState({
      startDate: date
    })
  }

  handleEndDateChange(date) {
    this.setState({
      endDate: date
    })
  }

  handleSortChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
    return (
      <Grid container spacing={16} direction="column" alignItems="center">
        {/* Profile */}
        <Grid item>
          <Profile
            handleLogoutClick={this.props.handleLogoutClick}
            user={this.props.user}
          />
        </Grid>
        {/* Fetch */}
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.handleFetchClick}
          >
            {this.props.fetched ? 'Fetch again' : 'Fetch tweets'}
          </Button>
        </Grid>
        {/* Import */}
        <Grid item>
          <Button
            variant="contained"
            color="primary"
          >
            Import archive
          </Button>
        </Grid>
        <Grid item>
          <FormControl>
            <InputLabel shrink htmlFor="sort-label-placeholder">
              Sort
            </InputLabel>
            <Select
              value={this.state.sort}
              onChange={this.handleSortChange}
              input={<Input name="sort" id="sort-label-placeholder" />}
              displayEmpty
              name="sort"
            >
              <MenuItem value={1}>Newest first</MenuItem>
              <MenuItem value={2}>Oldest first</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* Datepicker */}
        <Grid item>
        <SearchIcon />
          <Input 
            placeholder="Search..."
            disableUnderline
          />
        </Grid>
        {/* Datepicker */}
        <Grid item alignItems="center">
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Grid item>
              <DatePicker
                value={this.state.startDate}
                onChange={this.handleStartDateChange}
                label="Start date"
                disableFuture
                showTodayButton
                autoOk
                format="MMM Do, YYYY" // Moment formatting 
                minDate="2006-03-21"
              />
            </Grid>
            <Grid item>
              <DatePicker
                value={this.state.endDate}
                onChange={this.handleEndDateChange}
                label="End date"
                disableFuture
                showTodayButton
                autoOk
                format="MMM Do, YYYY" // Moment formatting
                minDate="2006-03-21"
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    );
  }
}

export default Sidebar;
