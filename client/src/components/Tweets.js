import React, { Component } from 'react';
import Tweet from 'react-tweet';

class Tweets extends Component {

  render() {
    const linkProps = { target: '_blank', rel: 'noreferrer' };
    return (
      <div>
        {this.props.tweetList.map(t =>
          <Tweet data={t.data} key={t.data.id_str} linkProps={linkProps} />
        )}
      </div>
    );
  }
}

export default Tweets;
