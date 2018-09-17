import React, { Component } from 'react';
import TopBar from './Topbar';
import Tweets from './Tweets';
import axios from 'axios';
import TablePagination from '@material-ui/core/TablePagination';
import CircularProgress from '@material-ui/core/CircularProgress';

class Content extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      page: 0,
      count: 0,
      rowsPerPage: 25,
      loading: false,
      tweetList: [],

      /* should be props */
      search: ''
    }

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleRowNumChange = this.handleRowNumChange.bind(this);
    this.loadTweets = this.loadTweets.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetching && !this.props.fetching) {
      this.loadTweets();
    }

    if (
      (prevProps.order !== this.props.order) ||
      (prevProps.startDate !== this.props.startDate) ||
      (prevProps.endDate !== this.props.endDate)) {
        this.loadTweets();
      }

  }

  loadTweets() {
    this.setState({
      loading: true
    })
    let url = 'http://127.0.0.1:3001/api/user/' + this.props.userId;
    axios.get(url, {
      params: {
        page: this.state.page,
        limit: this.state.rowsPerPage,
        order: this.props.order,
        startDate: this.props.startDate,
        endDate: this.props.endDate,
        search: this.state.search
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
    return (
      <div className="right">
        <TopBar />
        <div className="mainContent">
          {(this.props.fetched || this.props.fetching) ? (
            <div>
              {this.props.fetching ? (
                <div>
                  <h3>Fetching tweets. Please wait...</h3>
                  <CircularProgress color="primary"/>
                </div>
              ) : (
                <div>
                  {this.state.loading ? (
                    <div>
                      <h3>Loading tweets. Please wait...</h3>
                      <CircularProgress color="primary"/>
                    </div>
                  ) : (
                    <div>
                      <Tweets tweetList={this.state.tweetList}/>
                      <TablePagination 
                        count={this.state.count}
                        page={this.state.page} 
                        rowsPerPage={this.state.rowsPerPage}
                        component="div"
                        onChangePage={this.handlePageChange}
                        rowsPerPageOptions={[25, 50, 100]}
                        onChangeRowsPerPage={this.handleRowNumChange}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="emptyContent">
              <h3>Click fetch tweets to import your latest 3200 tweets</h3>
              <h3>Or upload a twitter archive to import all of your tweets </h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Content;
