import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';

const styles = {
  root: {

  }
}

 
class Search extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Input
          onChange={this.props.handleSearchChange}
          onKeyDown={this.props.handleSearch}
          placeholder="Search..."
          className={classes.root}
          disableUnderline
        />
      </div>
    );
  }
}

export default withStyles(styles)(Search);
