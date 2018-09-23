import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import DatePicker from 'material-ui-pickers/DatePicker';
import moment from 'moment';

const styles = {
  root: {
    
  }
}

moment.locale('en');
 
class DateRange extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker
            value={this.props.startDate}
            onChange={this.props.handleStartDateChange}
            label="Start date"
            disableFuture
            showTodayButton
            autoOk
            format="MMM Do, YYYY" // Moment formatting
          />
        </MuiPickersUtilsProvider>
      
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker
              value={this.props.endDate}
              onChange={this.props.handleEndDateChange}
              label="End date"
              disableFuture
              showTodayButton
              autoOk
              format="MMM Do, YYYY" // Moment formatting
            />
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}

export default withStyles(styles)(DateRange);
