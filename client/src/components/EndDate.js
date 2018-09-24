import React, { Component } from 'react';

import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import DatePicker from 'material-ui-pickers/DatePicker';
import moment from 'moment';

moment.locale('en');
 
class DateRange extends Component {

  render() {
    return (
      <div>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker
              value={this.props.endDate}
              onChange={this.props.handleEndDateChange}
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
