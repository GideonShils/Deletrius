import User from '../db/models/user';
import {Strategy as TwitterStrategy} from 'passport-twitter';
require('dotenv').config();

// Setup twitter authentication strategy
const strategy = new TwitterStrategy (
	{
	consumerKey: process.env.CONSUMER_KEY,
	consumerSecret: process.env.CONSUMER_SECRET,
	callbackURL: process.env.CALLBACK_URL
	},
	saveUser
);

// Save user to database
function saveUser(token, tokenSecret, profile, callback) {
	const query = { userId: profile.id };

	// Get larger version of profile picture
	const largePhoto = profile.photos[0].value.replace('normal', '400x400');

	// User info
	const updates = {
		userId: profile.id,
		userToken: token,
		userTokenSecret: tokenSecret,
		username: profile.username,
		displayname: profile.displayName,
		photo: largePhoto,
		twit: {
			consumer_key: process.env.CONSUMER_KEY,
			consumer_secret: process.env.CONSUMER_SECRET,
			access_token: token,
			access_token_secret: tokenSecret
		}
	};

	const options = {
		upsert: true,
		new: true
	};

	// If user exists, update their info. If not, create them.
	User.findOneAndUpdate(query, updates, options, (err, user) => {
		if (err) {
			return callback(err);
		} else {
			return callback(null, user);
		}
	})
}

module.exports = strategy;
