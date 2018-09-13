import express from 'express';
import User from '../db/models/user';
import twit from 'twit';

const router = express.Router();

router.get('/fetch', (req, res) => {
	const t = new twit(req.user.twit);
	let allTweets = [];
    getTweets();
    
    function getTweets(lastId) {
        // Set arguments
        let args = {
            user_id: req.user.userId,
            count: 200
        }
        // If not first call, include maxID = id of last retrieved tweet
        if (lastId) {
            args.max_id = lastId;
        }
        
        // Make API call to get 200 tweets after maxID
        t.get('statuses/user_timeline', args, compile);
    
        function compile(err, data) {
            if (err) {
                return done(err);
            }
            // If this isn't the first call, remove first tweet (since includerd in last set)
            if (allTweets.length) {
                data.shift();
            }
            
            allTweets = allTweets.concat(data);
    
            // If no data, we're done
            if (data.length == 0) {
                return saveTweets(null, allTweets);
            }
            
            // Otherwise, call again
            return getTweets(parseInt(allTweets[allTweets.length - 1].id_str));
    
        }
    }
    
    function saveTweets(err, data) {
        if (err) {
            console.log('error fetching tweets');
        } else {
            console.log('saving ' + data.length + ' tweets' );
            const userId = req.user.userId;
            User.findOne({ userId : userId }, (err, user) => {
                user.tweets = data;
                user.save((err) => {
                    if (err) {
                        console.log('error saving tweets.');
                    } else {
                        console.log('success. saved all tweets');
                    }
                });
            });
        }
        res.send();
    }
});

// Takes 2 params: page number (page), number per page(limit)
router.get('/user/:id', (req, res) => {
    const limit = parseInt(req.query.limit);
    const page = parseInt(req.query.page);

    const skip = (page - 1) * limit;
    
    User.find({userId : req.params.id}, {}, { limit: limit, skip: skip}, (err, docs) => {
        if (err) {
            console.log(err);
            res.json(null);
        } else {
            console.log(docs);
            res.json(docs);
        }
    })
})

module.exports = router;