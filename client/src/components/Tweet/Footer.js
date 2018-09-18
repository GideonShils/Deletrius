import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

class Footer extends React.Component {
  formatCount (count) {
    const readablize = num => {
      var e = Math.floor(Math.log(num) / Math.log(1000))
      return (num / Math.pow(1000, e)).toFixed(1) + 'K'
    }

    if (count > 999) return readablize(count)
    else return count
  }

  render () {
    const {data, linkProps} = this.props

    return (
      <div className="footer" style={styles.footer}>
        {/*href={`http://twitter.com/${data.user.screen_name}/status/${data.id_str}`} in a below*/}
        <a className="ProfileTweet-actionList" style={styles.ProfileTweetActionList} {...linkProps}>
          <div className="ProfileTweet-action" style={styles.ProfileTweetAction}>
            <div className="ProfileTweet-actionButton" style={styles.ProfileTweetActionBtn}>
              <div className="IconContainer" style={styles.IconContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                <path fill="#657786" d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"/></svg>
              </div>
              <div className="IconTextContainer" style={styles.IconTextContainer}>
                <div className="ProfileTweet-actionCount" style={styles.ProfileTweetActionCount}>
                  {this.formatCount(data.retweet_count)}
                </div>
              </div>
            </div>
          </div>
          <div className="ProfileTweet-action" style={styles.ProfileTweetAction}>
            <div className="ProfileTweet-actionButton" style={styles.ProfileTweetActionBtn}>
              <div className="IconContainer" style={styles.IconContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"> 
                  <path opacity="0" d="M0 0h24v24H0z"></path> 
                  <path fill='#657786' d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path> 
              </svg>
              </div>
              <div className="IconTextContainer" style={styles.IconTextContainer}>
                <div className="ProfileTweet-actionCount" style={styles.ProfileTweetActionCount}>
                  {this.formatCount(data.favorite_count)}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

Footer.propTypes = {
  'data': PropTypes.object
}

Footer.displayName = 'Footer'

export default Footer
