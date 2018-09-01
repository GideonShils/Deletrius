import passport from 'passport';
import User from '../db/models/user';
import TwitterStrategy from './twitterStrategy';
// const TwitterStrategy = require('./twitterStrategy');

passport.use(TwitterStrategy);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user);
	})
});

module.exports = passport;