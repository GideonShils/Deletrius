import React, { Component } from 'react';
import TopBar from './Topbar';
import Tweets from './Tweets';
//import axios from 'axios';
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
      order: 'newFirst',
      startDate: new Date('1995-12-03'),
      endDate: new Date(),
      search: ''
    }

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleRowNumChange = this.handleRowNumChange.bind(this);
  }

  handlePageChange(event, page) {
    this.setState({
      page: page
    })
  }

  handleRowNumChange(event) {
    this.setState({
      rowsPerPage: event.target.value
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
                      <Tweets tweetList={this.props.tweetList}/>
                      <TablePagination 
                        count={this.props.count}
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
