import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Topbar extends Component {

  constructor(props) {
    super(props)

    this.handleDeleteSelected = this.handleDeleteSelected.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
  }

  handleDeleteSelected() {
    
  }

  handleDeleteAll() {

  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
        <Grid container spacing={8}>
          <Grid item>
            <Button
              disabled={!this.props.selected}
              variant="contained"
              color="secondary"
              onClick={this.props.handleDeleteSelectedClick}
            >
              Delete Selected
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={this.props.handleDeleteAllClick}
              variant="contained"
              color="secondary"
            >
              Delete all
            </Button>
          </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Topbar;
