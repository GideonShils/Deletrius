import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
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

// Twitter authentication
passport.use(new TwitterStrategy ({
	consumerKey: process.env.CONSUMER_KEY,
	consumerSecret: process.env.CONSUMER_SECRET,
	callbackURL: "http://127.0.0.1:3001/auth/twitter/callback"
	},
	function(token, tokenSecret, profile, callback) {
		console.log(profile);
		User.findOne({ userId : profile.id }, (err, user) => {
			if (err) {
				return callback(err);
			}
	
			// If user exists, update and return them
			if (user) {
				console.log('exists');
				User.update({ userId: profile.id }, 
					{
						userToken: token,
						userTokenSecret: tokenSecret,
						username: profile.username,
						displayname: profile.displayname,
						photo: profile.photos[0].value
					}, (err) => {
						throw err;
					})
				return callback(null, user);
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
.catch((err) => console.error('Database connection error'));


const Schema = mongoose.Schema;

const userSchema = new Schema({
	userId: Number,
	userToken: String,
	userTokenSecret: String,
	username: String,
	displayName: String,
	photo: String
});

const User = mongoose.model('users', userSchema)

// Start server listening
app.listen(app.get('port'), () => {
	console.log('Express server listening on port ' + app.get('port'));
});