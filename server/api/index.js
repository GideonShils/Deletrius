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

    const skip = (page - 1) * limit;
    let numPages;
    let totalDocs;

    Tweet.countDocuments({user : req.params.id}, (err, count) => {
        if (err) {
            console.err(err);
        } else {
            totalDocs = count;
            numPages = Math.ceil(totalDocs / limit);

            Tweet
            .find({user : req.params.id})
            .sort({date: -1})
            .skip(skip)
            .limit(limit)
            .exec( (err, docs) => {
                if (err) {
                    console.err(err);
                    res.json(null);
                } else {
                    res.json({tweets: docs, numPages: numPages});
                }
            })
        }
    });
})

module.exports = router;