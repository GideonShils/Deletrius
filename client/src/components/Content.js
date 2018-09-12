import React, { Component } from 'react';
import TopBar from './Topbar';
import axios from 'axios';

class Content extends Component {
  
  constructor(props) {
    super(props);

    this.handleFetchClick = this.handleFetchClick.bind(this);

    this.state = {
      fetched : false
    }
  }

  handleFetchClick() {
    axios.get('http://127.0.0.1:3001/api/fetch')
    .then((res) => {
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
        <div className="content">
          {this.state.fetched ? (
            <div className="fetchedContent">
              <FetchButton onClick={this.handleFetchClick} />
              <h1>tweets</h1>
            </div>
          ) : (
            <div className="emptyContent">
              <h3>Click fetch tweets to import your latest 3200 tweets</h3>
              <FetchButton onClick={this.handleFetchClick} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

function FetchButton(props) {
  return (
    <div>
        <button onClick={props.onClick}>
          Fetch tweets
        </button>
      </div>
  )
}

export default Content;
