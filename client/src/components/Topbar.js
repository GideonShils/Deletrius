import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Topbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      allSelected: false,
      selected: false
    }

    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSelectAll() {
    if (this.state.allSelected) {
      this.setState({ 
        allSelected: false,
        selected: false
      
      })
    } else {
      this.setState({ 
        allSelected: true,
        selected: true
      })
    }
  }

  handleDelete() {

  }


  render() {
    return (
      <AppBar position="static">
        <Toolbar>
        <Grid container spacing={8}>
          <Grid item>
            <Button
              onClick={this.handleSelectAll}
              variant="contained"
              color="secondary"
            >
              {this.state.allSelected ? 'deselect all' : 'select all'}
            </Button>
          </Grid>
          <Grid item>
            <Button
              disabled={!this.state.selected}
              onClick={this.handleDelete}
              variant="contained"
              color="secondary"
            >
              Delete Selected
            </Button>
          </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Topbar;
