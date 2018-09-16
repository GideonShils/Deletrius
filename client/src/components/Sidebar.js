import React, { Component } from 'react';
import Profile from './Profile';
import axios from 'axios';


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
      sort: 1,
      fetched: false
    }

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleFetchClick = this.handleFetchClick.bind(this);
  }

  handleFetchClick() {
    axios.get('http://127.0.0.1:3001/api/fetch')
    .then((res) => {
      console.log('setting state')
      localStorage.setItem('fetched', true);
      this.setState({
        fetched : true
      })
    })
    .catch((err) => {
      console.log(err);
    })
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
      <div className="sidebar">
        <Profile
          handleLogoutClick={this.props.handleLogoutClick}
          user={this.props.user}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={this.handleFetchClick}
        >
          {this.state.fetched ? 'Fetch again' : 'Fetch tweets'}
        </Button>

        <Button
          variant="contained"
          color="primary"
        >
          Import archive
        </Button>

        <SearchIcon />
        <Input 
          placeholder="Search..."
          disableUnderline
        />

        <MuiPickersUtilsProvider utils={MomentUtils}>
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
        </MuiPickersUtilsProvider>

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
      </div>
    );
  }
}

export default Sidebar;
