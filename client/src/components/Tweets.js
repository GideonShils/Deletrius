import React, { Component } from 'react';
import Tweet from './Tweet';
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class Tweets extends Component {

  render() {
    const linkProps = { target: '_blank', rel: 'noreferrer' };
    return (
      <div>
        {this.props.tweetList.map(t =>
          <div onClick={(e) => this.props.onClick(e, t.data.id_str)} key={t.data.id_str}>
            <Tweet 
              isSelected={this.props.selectedTweets.includes(t.data.id_str)} 
              data={t.data}
              linkProps={linkProps} 
            />
          </div>
        )}
      </div>
    );
  }
}

export default Tweets;
