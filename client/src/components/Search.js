import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = {
  root: {
    margin: '10px 0 0 20px'
  }
}

 
class Search extends Component {

  render() {
    const { classes } = this.props;
    return (
        <Input
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>}
          onChange={this.props.handleSearchChange}
          onKeyDown={this.props.handleSearch}
          placeholder="Search..."
          className={classes.root}
        />
    );
  }
}

export default withStyles(styles)(Search);
