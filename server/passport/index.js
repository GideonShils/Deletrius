import passport from 'passport';
import User from '../db/models/user';
import TwitterStrategy from './twitterStrategy';

// Use twitter for login via passport
passport.use(TwitterStrategy);

// Serialize user and store user id in session
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// Deserialize user from database using user id from session
passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user);
	})
});

module.exports = passport;