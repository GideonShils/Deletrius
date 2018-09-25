import React, { Component } from 'react';
import TopBar from './Topbar';
import Tweets from './Tweets';
import axios from 'axios';
import TablePagination from '@material-ui/core/TablePagination';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    marginTop: theme.spacing.unit * 12
  },
  fetchInstructions: {
    margin: theme.spacing.unit * 4,
    padding: theme.spacing.unit * 4
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  topBar: {
    zIndex: 9999,
  },
  tweets: {
    /*padding: theme.spacing.unit * 4*/
  },
  fetching: {
    margin: '0 auto',
    textAlign: 'center'
  },
  loading: {
    margin: '0 auto',
    textAlign: 'center'
  }
})

class Content extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      page: 0,
      count: 0,
      rowsPerPage: 25,
      loading: false,
      tweetList: [],
      selectedTweets: []
    }

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleRowNumChange = this.handleRowNumChange.bind(this);
    this.loadTweets = this.loadTweets.bind(this);
    this.handleTweetClick = this.handleTweetClick.bind(this);
    this.handleDeleteSelectedClick = this.handleDeleteSelectedClick.bind(this);
    this.handleDeleteAllClick = this.handleDeleteAllClick.bind(this);
  }

  componentDidMount() {
    if (this.props.fetched) {
      // Reload tweets
      this.loadTweets();
    }
  }

  handleDeleteAllClick() {
    let url = '/api/user/' + this.props.userId;
    axios.delete(url, {
      params: {
        startDate: this.props.startDate,
        endDate: this.props.endDate,
        search: this.props.search
      }
    }).then(() => {
      // Reload tweets
      this.loadTweets();
      // Clear selected tweets
      this.setState({
        selectedTweets: []
      })
    })
  }

  handleDeleteSelectedClick() {
    axios.delete(('/api/deleteSelected'), {
      data: this.state.selectedTweets
    }).then(() => {
      // Reload tweets
      this.loadTweets();
      // Clear selected tweets
      this.setState({
        selectedTweets: []
      })
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetching && !this.props.fetching) {
      this.loadTweets();
    }

    if (
      (prevProps.order !== this.props.order) ||
      (prevProps.startDate !== this.props.startDate) ||
      (prevProps.endDate !== this.props.endDate) ||
      (prevProps.search !== this.props.search)) {
        this.loadTweets();
      }
  }

  handleTweetClick(e, id) {
    if (!this.state.selectedTweets.includes(id)) {
      this.setState({
        selectedTweets: this.state.selectedTweets.concat(id)
      })
    } else {
      let selected = [...this.state.selectedTweets];
      const index = selected.indexOf(id);
      selected.splice(index, 1);

      this.setState({
        selectedTweets: selected
      })
    }
  }

  loadTweets() {
    this.setState({
      loading: true
    })
    let url = '/api/user/' + this.props.userId;
    axios.get(url, {
      params: {
        page: this.state.page,
        limit: this.state.rowsPerPage,
        order: this.props.order,
        startDate: this.props.startDate,
        endDate: this.props.endDate,
        search: this.props.search
      }
    })
    .then((res) => {
      this.setState({
        tweetList: res.data.tweets,
        count: res.data.count,
        loading: false
      })
    })
  }

  handlePageChange(event, page) {
    this.setState({ page: page }, () => {
      this.loadTweets();
    })
  }

  handleRowNumChange(event) {
    this.setState({ rowsPerPage: event.target.value }, () => {
      this.loadTweets();
    })
  }
  
  render() {
    const selected = this.state.selectedTweets.length === 0 ? false : true;
    const { classes } = this.props;

    return (
      <React.Fragment>
        <TopBar 
          selected={selected}
          handleDeleteSelectedClick={this.handleDeleteSelectedClick}
          handleDeleteAllClick={this.handleDeleteAllClick}
          className={classes.topBar}
          total={this.state.count}
          selectedCount={this.state.selectedTweets.length}
        />
        
        <div className={classes.container}>
          {(this.props.fetched || this.props.fetching) ? (
            <React.Fragment>
              {this.props.fetching ? (
                <div className={classes.fetching}>
                  <h3>Fetching tweets. Please wait...</h3>
                  <CircularProgress color="primary"/>
                </div>
              ) : (
                <React.Fragment>
                  {this.state.loading ? (
                    <div className={classes.loading}>
                      <h3>Loading tweets. Please wait...</h3>
                      <CircularProgress color="primary"/>
                    </div>
                  ) : (
                    <React.Fragment>
                      <div className={classes.tweets}>
                        <Tweets 
                          onClick={this.handleTweetClick} 
                          tweetList={this.state.tweetList}
                          selectedTweets={this.state.selectedTweets}
                        />
                      </div>
                      <TablePagination 
                        count={this.state.count}
                        page={this.state.page} 
                        rowsPerPage={this.state.rowsPerPage}
                        component="div"
                        onChangePage={this.handlePageChange}
                        rowsPerPageOptions={[25, 50, 100]}
                        onChangeRowsPerPage={this.handleRowNumChange}
                      />
                    </React.Fragment>
                  )}
                </React.Fragment>
              )}
            </React.Fragment>
          ) : (
            <Paper className={classes.fetchInstructions} elevation={1} square={true}>
              <h3>Import your tweets to get started</h3>
              <p>
                The easiest way to import your tweets is directly through twitter.
                However, Twitter enforces a 3200 tweet limit for imports with their API.
                If you have fewer than 3200 tweets, click the fetch tweets button below.
              </p>
              <p>
                If you need to import more than 3200 tweets, you can import a twitter archive
                file which can be created through Twitter. Once you've created an archive, you 
                can import it below. (COMING SOON)
              </p>
              <Button
                variant="contained"
                color="primary"
                onClick={this.props.handleFetchClick}
                className={classes.button}
              >
                Fetch tweets
              </Button>

              <Button
                variant="contained"
                color="primary"
                disabled
                onClick={this.props.handleFetchClick}
                className={classes.button}
              >
                Import archive
              </Button>
            </Paper>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Content);
