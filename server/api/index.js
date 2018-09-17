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
        } else {
            console.log('Saved ' + data.count + ' tweets');
            res.send({msg: 'success'});
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

module.exports = router;