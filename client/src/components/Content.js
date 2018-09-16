import React, { Component } from 'react';
import TopBar from './Topbar';
import Tweets from './Tweets';
import axios from 'axios';

class Content extends Component {
  
  constructor(props) {
    super(props);

    this.handleFetchClick = this.handleFetchClick.bind(this);

    let fetched = localStorage.getItem('fetched');

    if (fetched) {
      this.state = {
        fetched: true
      }
    } else {
      this.state = {
        fetched: false
      }
    }
  }

  handleFetchClick() {
    axios.get('http://127.0.0.1:3001/api/fetch')
    .then((res) => {
      console.log('setting state')
      localStorage.setItem('fetched', true);
      this.setState({
        fetched : true
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  render() {
    return (
      <div className="right">
        <TopBar />
        <div className="mainContent">
          {this.state.fetched ? (
            <div className="fetchedContent">
              <Tweets />
            </div>
          ) : (
            <div className="emptyContent">
              <h3>Click fetch tweets to import your latest 3200 tweets</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Content;
