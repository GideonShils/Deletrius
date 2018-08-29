import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import twit from 'twit';
import fs from 'fs';
import path from 'path';
var TwitterStrategy = require('passport-twitter').Strategy;
require('dotenv').config();

/********************************
 *  App config / middleware
 ********************************/

const app = express();
const router = express.Router();

app.set('port', process.env.PORT || 3001);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', router);

/********************************
 *  API
 ********************************/
router.get('/', (req, res) => {
	res.send({message: 'Hello World'});
})

router.get('/auth/twitter',
	passport.authenticate('twitter')
);

router.get('/auth/twitter/callback',
	passport.authenticate('twitter', {
		successRedirect : '/success',
		failureRedirect : '/failure'
	})
);

router.get('/logout', (req, res) => {
	req.session.destroy();
})

router.get('/success', (req, res) => {
	res.send(req.user);
});

router.get('/fetch', (req, res) => {
	let t = new twit(req.user.twit);
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
			let userId = req.user.userId;
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

/********************************
 *  Authentication
 ********************************/
passport.use(new TwitterStrategy ({
	consumerKey: process.env.CONSUMER_KEY,
	consumerSecret: process.env.CONSUMER_SECRET,
	callbackURL: "http://127.0.0.1:3001/auth/twitter/callback"
	},
	function(token, tokenSecret, profile, callback) {
		var query = { userId: profile.id };

		var updates = {
			userId: profile.id,
			userToken: token,
			userTokenSecret: tokenSecret,
			username: profile.username,
			displayname: profile.displayName,
			photo: profile.photos[0].value,
			twit: {
				consumer_key: process.env.CONSUMER_KEY,
				consumer_secret: process.env.CONSUMER_SECRET,
				access_token: token,
				access_token_secret: tokenSecret
			}
		};

		var options = {
			upsert: true,
			new: true
		};

		// Update or create user
		User.findOneAndUpdate(query, updates, options, (err, user) => {
			if (err) {
				return callback(err);
			} else {
				return callback(null, user);
			}
		})
	}
));

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user);
	})
});

/********************************
 *  Database setup
 ********************************/
mongoose.connect(process.env.DB_URI, {
	auth: {
		user: process.env.DB_USER,
		password: process.env.DB_PASS
	},
	useNewUrlParser: true
})
.then(() => console.log('Database connection successful'))
.catch((err) => console.error(err + 'Database connection error'));


// Define schemas
const Schema = mongoose.Schema;

// User schema
const userSchema = new Schema({
	userId: Number,
	userToken: String,
	userTokenSecret: String,
	username: String,
	displayName: String,
	photo: String,
	twit: Object,
	tweets: Object
});

// Define models
const User = mongoose.model('users', userSchema);

// Start server listening
app.listen(app.get('port'), () => {
	console.log('Express server listening on port ' + app.get('port'));
});