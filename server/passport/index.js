import passport from 'passport';
import User from '../db/models/user';
import TwitterStrategy from './twitterStrategy';
// const TwitterStrategy = require('./twitterStrategy');

passport.use(TwitterStrategy);

passport.serializeUser((user, done) => {
	//console.log('serialize');
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	//console.log('deserialize');
	User.findById(id, (err, user) => {
		done(err, user);
	})
});

module.exports = passport;