import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
  },
  count: {
    color: '#fff',
    float: 'left',
    marginTop: 6
  }
})

class Topbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allOpen: false,
      selectedOpen: false
    }

    this.handleDeleteAllClick = this.handleDeleteAllClick.bind(this);
    this.handleDeleteSelectedClick = this.handleDeleteSelectedClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleDeleteAllConfirm = this.handleDeleteAllConfirm.bind(this);
    this.handleDeleteSelectedConfirm = this.handleDeleteSelectedConfirm.bind(this);
  }

  handleCancelClick() {
    this.setState({
      allOpen: false,
      selectedOpen: false
    })
  }

  handleDeleteAllClick() {
    this.setState({
      allOpen: true
    })
  }

  handleDeleteSelectedClick() {
    this.setState({
      selectedOpen: true
    })
  }

  handleDeleteAllConfirm() {
    this.props.handleDeleteAllClick();

    this.setState({
      allOpen: false
    })
  }

  handleDeleteSelectedConfirm() {
    this.props.handleDeleteSelectedClick();

    this.setState({
      selectedOpen: false
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.topbar}>
          <Typography className={classes.count} variant="subheading">
            {this.props.selectedCount}/{this.props.total} selected
          </Typography>
          <Button
            onClick={this.handleDeleteAllClick}
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Delete all
          </Button>

          <Button
            disabled={!this.props.selected}
            variant="contained"
            color="secondary"
            onClick={this.handleDeleteSelectedClick}
            className={classes.button}
          >
            Delete Selected
          </Button>
          </div>

        {/* Confirm delete all */}
        <Dialog
          open={this.state.allOpen}
          onClose={this.handleCancelClick}
          aria-labeledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You're about to delete all tweets that match your search criteria. 
              This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancelClick} color="primary" autoFocus>
              Cancel
            </Button>
            <Button onClick={this.handleDeleteAllConfirm} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>

        {/* Confirm delete selected */}
        <Dialog
          open={this.state.selectedOpen}
          onClose={this.handleCancelClick}
          aria-labeledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You're about to delete {this.props.selectedCount} selected tweets. 
              This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancelClick} color="primary" autoFocus>
              Cancel
            </Button>
            <Button onClick={this.handleDeleteSelectedConfirm} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Topbar);
