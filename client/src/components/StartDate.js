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
            disableFuture
            showTodayButton
            autoOk
            clearable={true}
            format="MMM Do, YYYY" // Moment formatting
            InputProps={{
              disableUnderline: true,
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}

export default withStyles(styles)(DateRange);
