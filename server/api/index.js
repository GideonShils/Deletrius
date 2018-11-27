import express from 'express';
import Tweet from '../db/models/tweet';
import {getTweets} from './helpers';
import Twit from 'twit';

const router = express.Router();

// Fetch initial 3200 tweets using twitter API
router.get('/fetch', (req, res) => {
    const userId = req.user.userId;
    const t = new Twit(req.user.twit);

    let allTweets = [];

    getTweets(allTweets, userId, t, (err, data) => {
        if (err) {
            console.err(err);
            res.send({msg: 'error'});
            res.end();
        } else if (data.length === 0) {
            res.send();
        } else {
            console.log('Saved ' + data.count + ' tweets');
            res.send({msg: 'success', count: data.count});
            res.end();
        }
    });
});

// Get tweets from given user that match current filtering settings.
// Returns properly paginated values using page and limit params
router.get('/user/:id', (req, res) => {
    const limit = parseInt(req.query.limit); // Num per page
    const page = parseInt(req.query.page); // Page num
    const order = req.query.order;
    const startDate = new Date(req.query.startDate); // Earliest date
    const endDate = new Date(req.query.endDate); // Latest date

    let sort;
    if (order == 'newFirst') {
        sort = -1;
    } else {
        sort = 1
    }

    const skip = (page) * limit; // Skip for pagination

    let query = {user: req.params.id} // User id

    // Search term
    if (req.query.search) {
        query.$text = {$search: req.query.search}
    }

    // Get all tweets that meet query filters 
    Tweet
    .find(query)
    .where('date').gte(startDate).lte(endDate)
    .sort({date: sort})
    .skip(skip)
    .limit(limit)
    .exec( (err, docs) => {
        if (err) {
            console.error(err);
            res.json(null);
        } else {
            // Get the number of items that meet the query filters
            Tweet.countDocuments(query)
            .where('date').gte(startDate).lte(endDate)
            .exec((err, count) => {
                if(err) {
                    console.error(err)
                    res.json(null);
                } else {
                    // Return the count and the list of documents
                    res.json({count: count, tweets: docs});
                }
            })
        }
    })
})

// Delete all tweets that match current filters
router.delete('/user/:id', (req, res) => {
    const t = new Twit(req.user.twit); // Twit object for interacting with twitter API
    const startDate = new Date(req.query.startDate);
    const endDate = new Date(req.query.endDate);

    // User id
    let query = {user: req.params.id}

    // Search term
    if (req.query.search) {
        query.$text = {$search: String(req.query.search)}
    }

    Tweet
    .find(query)
    .where('date').gte(startDate).lte(endDate)
    .exec( (err, docs) => {
        if (err) {
            console.error(err);
            res.json(null);
        } else {
            let count = 0;
            // Delete each tweet
            docs.forEach(doc => {
                t.post('statuses/destroy/:id', {id: doc.id_str}, (err, data) => {
                    if (err) {
                        console.error(err);
                    } else {
                        count++;
                        // Remove tweet from database
                        Tweet.deleteOne({id_str: doc.id_str}, (err) => {
                            if (err) {
                                console.error(err)
                            } else {
                                if (count == docs.length) {
                                    res.send();
                                }
                            }
                        })
                    }
                })
            });
        }
    })
})

// Delete selected tweets
router.delete('/deleteSelected', (req, res) => {
    const t = new Twit(req.user.twit);

    const tweetIDs = req.body;
    let count = 0;

    // Delete each tweet
    tweetIDs.forEach(tweetId => {
        t.post('statuses/destroy/:id', {id: tweetId}, (err, data) => {
            if (err) {
                console.error(err);
            } else {
                count++;
                
                if (count == tweetIDs.length) {
                    Tweet.deleteMany({id_str: { $in: tweetIDs}}, (err) => {
                        if (err) {
                            console.error(err)
                        } else {
                            res.send();
                        }
                    })
                }
            }
        })
    });
})

module.exports = router;