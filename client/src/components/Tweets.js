import React, { Component } from 'react';
import Tweet from './Tweet';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  tweet: {
    marginBottom: theme.spacing.unit * 4,
    padding: theme.spacing.unit * 2,
    maxWidth: 588,
    minWidth: 350,
    margin: '0 auto'
  },
  selected: {
    backgroundColor: '#f5f5f5'
  },
  noTweets: {
    margin: '0 auto',
    textAlign: 'center'
  }
})

class Tweets extends Component {

  constructor(props) {
    super(props)

    this.getClassnames = this.getClassnames.bind(this);
  }

  getClassnames(id) {
    const {classes} = this.props;
    if (this.props.selectedTweets.includes(id)) {
      return classNames(classes.tweet, classes.selected)
    } else {
      return classes.tweet;
    }
  }

  render() {
    const linkProps = { target: '_blank', rel: 'noreferrer' };
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.props.tweetList.length > 0 ? (
          <React.Fragment>
            {this.props.tweetList.map(t =>
              <Paper
                onClick={(e) => this.props.onClick(e, t.data.id_str)} 
                key={t.data.id_str}
                elevation={1}
                className={ this.getClassnames(t.data.id_str) }
              >
                <Tweet
                  data={t.data}
                  linkProps={linkProps} 
                />
              </Paper>
            )}
          </React.Fragment>
        ) : (
          <Typography 
            className={classes.noTweets}
            variant="subheading"
          >
            No tweets to display.
          </Typography>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Tweets);
