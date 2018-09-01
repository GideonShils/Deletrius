import User from '../db/models/user';
import {Strategy as TwitterStrategy} from 'passport-twitter';
// const TwitterStrategy = require('passport-twitter').Strategy;
require('dotenv').config();

const strategy = new TwitterStrategy ({
	consumerKey: process.env.CONSUMER_KEY,
	consumerSecret: process.env.CONSUMER_SECRET,
	callbackURL: "http://127.0.0.1:3001/auth/twitter/callback"
	},
	function(token, tokenSecret, profile, callback) {
		const query = { userId: profile.id };

		const updates = {
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

		const options = {
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
);

module.exports = strategy;
