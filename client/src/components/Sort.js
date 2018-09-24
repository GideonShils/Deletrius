import React, { Component } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';

 
class Sort extends Component {

  render() {
    return (
      <div>
        <FormControl>
          <Select
            value={this.props.order}
            onChange={this.props.handleOrderChange}
            input={<Input name="order" id="order-label-placeholder" />}
            displayEmpty
            name="order"
            disableUnderline
          >
            <MenuItem value="newFirst">Newest first</MenuItem>
            <MenuItem value="oldFirst">Oldest first</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default Sort;
