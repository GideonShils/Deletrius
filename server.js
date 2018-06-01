import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import twitter from 'twit';
import fs from 'fs';
import path from 'path';
var TwitterStrategy = require('passport-twitter').Strategy;
require('dotenv').config();


// App config
const app = express();
const router = express.Router();

app.set('port', process.env.PORT || 3001);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(session({
    secret: "SECRET",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', router);

// API
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

router.get('/success', (req, res) => {
	res.send(req.user);
});

router.get('/fetch', (req, res) => {
	let t = new twitter(req.user.twit);
	let allTweets = [];
	getTweets();

	function getTweets() {
		// Set arguments
		let args = {
			user_id: req.user.userId,
			count: 200
		}
		// If not first call, include maxID = id of last retrieved tweet
		if (allTweets.length > 0) {
			args.max_id = allTweets[allTweets.length-1].tweetId;
		}
		
		// Make API call to get 200 tweets after maxID
		t.get('statuses/user_timeline', args, 
			(err, data, response) => {
				if (err) {
					return done(err);
				}
				// If not first call, remove first (since includerd in last set)
				if (allTweets.length > 0) {
					console.log('removing ' + data.shift().id);
				}
				// Create a new document for each tweet and push it to stack
				data.forEach((element) => {
					let newTweet = new Tweet({
						tweetId : element.id,
						tweetData : element
					});
					allTweets.push(newTweet);
				})
				console.log('last added: ' + allTweets[allTweets.length-1].tweetId);

				// If no data, we're done
				if (data.length == 0) {
					return done(null, allTweets)
				}

				// Oterwise, call again
				return getTweets();

			}
		)
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

// Twitter authentication
passport.use(new TwitterStrategy ({
	consumerKey: process.env.CONSUMER_KEY,
	consumerSecret: process.env.CONSUMER_SECRET,
	callbackURL: "http://127.0.0.1:3001/auth/twitter/callback"
	},
	function(token, tokenSecret, profile, callback) {
		User.findOne({ userId : profile.id }, (err, user) => {
			if (err) {
				return callback(err);
			}
	
			// If user exists, update and return them
			if (user) {
				console.log('exists');
				user.userToken = token;
				user.userTokenSecret = tokenSecret;
				user.username = profile.username;
				user.displayname = profile.displayname;
				user.photo = profile.photos[0].value;
				user.twit = {
					consumer_key: process.env.CONSUMER_KEY,
					consumer_secret: process.env.CONSUMER_SECRET,
					access_token: token,
					access_token_secret: tokenSecret
				};

				user.save((err) => {
					if (err) {
						throw err;
					} else {
						return callback(null, user);
					}
				});
			} 
			// If user doesn't exist, add to DB and return them
			else {
				console.log('new');
				let newUser = new User();
				newUser.userId = profile.id;
				newUser.userToken = token;
				newUser.userTokenSecret = tokenSecret;
				newUser.username = profile.username;
				newUser.displayname = profile.displayname;
				newUser.photo = profile.photos[0].value;
				newUser.twit = {
					consumer_key: process.env.CONSUMER_KEY,
					consumer_secret: process.env.CONSUMER_SECRET,
					access_token: token,
					access_token_secret: tokenSecret
				};

				newUser.save((err) => {
					if (err) {
						throw err;
					} else {
						return callback(null, newUser)
					}
				})
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

// Database
mongoose.connect(process.env.DB_URI, {
	auth: {
		user: process.env.DB_USER,
		password: process.env.DB_PASS
	}
})
.then(() => console.log('Database connection successful'))
.catch((err) => console.error(err + 'Database connection error'));


const Schema = mongoose.Schema;

const tweetSchema = new Schema({
	tweetId: Number,
	tweetData: Object
});

const userSchema = new Schema({
	userId: Number,
	userToken: String,
	userTokenSecret: String,
	username: String,
	displayName: String,
	photo: String,
	twit: Object,
	tweets: [tweetSchema]
});

const Tweet = mongoose.model('tweets', tweetSchema);
const User = mongoose.model('users', userSchema);

// Start server listening
app.listen(app.get('port'), () => {
	console.log('Express server listening on port ' + app.get('port'));
});