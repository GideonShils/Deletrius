import Tweet from '../db/models/tweet';
import moment from 'moment';

export function getTweets(tweets, userId, t, cb, lastId) {
    // Set API arguments
    let args = {
        user_id: userId,
        count: 200
    }

    // If not first call, include maxID = id of last retrieved tweet
    // (for paging. can only get 200 tweets at a time)
    if (lastId) {
        args.max_id = lastId;
    }
    
    // Make API call to get 200 tweets after maxID
    t.get('statuses/user_timeline', args, (compileTweets));

    // Add the last 200 tweets to the full list
    function compileTweets(err, data) {
        if (err) {
            console.err(err);
        }

        // If this isn't the first call, remove first tweet (since includerd in last set)
        if (lastId) {
            data.shift();
        }

        // If no data, we're done
        if (data.length == 0) {
            return saveTweets(tweets, userId, (err, data) => {
                if (err) {
                    cb(err);
                } else {
                    cb(err, data);
                }
            });
        }

        tweets = tweets.concat(data);

        // Otherwise, call again
        return getTweets(tweets, userId, t, cb, parseInt(data[data.length - 1].id_str));
    }
}

function saveTweets(tweets, userId, callback) {

    moment().format();

    let count = 0;
    const options = {
        upsert: true,
        new: true
    };


    console.log('adding tweets');
    tweets.forEach(tweetData => {
        const date = moment.utc(tweetData.created_at, 'ddd MMM DD HH:mm:ss Z YYYY');
        const query = { user: userId, id_str: tweetData.id_str };

        const updates = {
            user: userId,
            id_str: tweetData.id_str,
            data: tweetData,
            date: date.toDate()
        }
        
        Tweet.findOneAndUpdate(query, updates, options, (err, doc) => {
            if (err) {
                console.err(err);
                callback(err);
            } else {
                count++;
                if (count == [tweets.length]) {
                    callback(null, {count: count});
                }
            }
        });
    })
}