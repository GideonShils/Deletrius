import express from 'express';
import Tweet from '../db/models/tweet';
import {getTweets} from './helpers';
import Twit from 'twit';

const router = express.Router();

// Fetch initial 3200 tweets using twitter API
router.get('/fetch', (req, res) => {
    console.log(req.session);
    const userId = req.user.userId;
    const t = new Twit(req.user.twit);

    let allTweets = [];

    getTweets(allTweets, userId, t, (err, data) => {
        if (err) {
            console.err(err);
            res.send({msg: 'error'});
            res.end();
        } else if (data.length === 0) {
            console.log('no tweets');
            res.send();
        } else {
            console.log('Saved ' + data.count + ' tweets');
            res.send({msg: 'success'});
            res.end();
        }
    });
});

// Takes 2 params: page number (page), number per page(limit)
router.get('/user/:id', (req, res) => {
    const limit = parseInt(req.query.limit);
    const page = parseInt(req.query.page);
    const order = req.query.order;
    let sort;
    const startDate = new Date(req.query.startDate);
    const endDate = new Date(req.query.endDate);

    if (order == 'newFirst') {
        sort = -1;
    } else {
        sort = 1
    }

    const skip = (page) * limit;

    let query = {user: req.params.id}

    if (req.query.search) {
        query.$text = {$search: req.query.search}
    }

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
            Tweet.countDocuments(query)
            .where('date').gte(startDate).lte(endDate)
            .exec((err, count) => {
                if(err) {
                    console.error(err)
                    res.json(null);
                } else {
                    res.json({count: count, tweets: docs});
                }
            })
        }
    })
})

// Takes 2 params: page number (page), number per page(limit)
router.delete('/user/:id', (req, res) => {
    const t = new Twit(req.user.twit);
    const startDate = new Date(req.query.startDate);
    const endDate = new Date(req.query.endDate);

    let query = {user: req.params.id}

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
            docs.forEach(doc => {
                t.post('statuses/destroy/:id', {id: doc.id_str}, (err, data) => {
                    if (err) {
                        console.error(err);
                    } else {
                        count++;
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

// Takes 2 params: page number (page), number per page(limit)
router.delete('/deleteSelected', (req, res) => {
    const t = new Twit(req.user.twit);

    const tweetIDs = req.body;
    let count = 0;

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