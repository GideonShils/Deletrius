import React, { Component } from 'react';

import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import { DatePicker } from 'material-ui-pickers';
import moment from 'moment';

moment.locale('en');
 
class DateRange extends Component {

  render() {
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

export default DateRange;
