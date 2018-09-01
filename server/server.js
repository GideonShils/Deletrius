require('dotenv').config();
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from './passport';
import db from './db';
import session from 'express-session';
import twit from 'twit';
import authRouter from './auth';

/********************************
 *  App config / middleware
 ********************************/

const app = express();
const router = express.Router();

app.set('port', process.env.PORT || 3001);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Setup authentication routing
app.use('/auth', authRouter);

// Setup api routing
app.use('/', router);

/********************************
 *  API
 ********************************/
router.get('/api', (req, res) => {
	res.json({message: 'Express REST API'});
})

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
				return done(null, allTweets);
			}
			
			// Otherwise, call again
			return getTweets(parseInt(allTweets[allTweets.length - 1].id_str));

		}
	}

	function done(err, data) {
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
		res.end();
	}
});

// Start server listening
app.listen(app.get('port'), () => {
	console.log('Express server listening on port ' + app.get('port'));
});