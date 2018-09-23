import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core';

const styles = theme => ({
  topbar: {
    background: '#4253AF',
    padding: theme.spacing.unit * 2,
    width: '75%',
    position: 'fixed',
    zIndex: '999',
    boxShadow: '1px 0px 8px 0px rgba(0,0,0,0.15)'
  },
  button: {
    marginRight: theme.spacing.unit * 2,
    float: 'right'
  }
})

class Topbar extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.topbar}>
        <Button
          disabled={!this.props.selected}
          variant="contained"
          color="secondary"
          onClick={this.props.handleDeleteSelectedClick}
          className={classes.button}
        >
          Delete Selected
        </Button>

        <Button
          onClick={this.props.handleDeleteAllClick}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Delete all
        </Button>
        </div>
    );
  }
}

export default withStyles(styles)(Topbar);
