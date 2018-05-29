import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
var authStrategy = require('passport-twitter').Strategy;
require('dotenv').config();

// Setup server & routes
const app = express();

app.set('port', process.env.PORT || 3001);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

const router = express.Router();

router.get('/', (req, res) => {
	res.send({message: 'Hello World'});
})

router.get('/auth/twitter', passport.authenticate('twitter'));

router.get('/auth/twitter/callback',
	passport.authenticate('twitter'),
	function(req, res) {
		console.log(res);
	});

app.use('/api', router);


// Twitter authentication
passport.use(new authStrategy ({
	consumerKey: process.env.CONSUMER_KEY,
	consumerSecret: process.env.CONSUMER_SECRET,
	callbackURL: "http://127.0.0.1:3001/auth/twitter/callback"
	},
	function(token, tokenSecret, profile, callback) {
		return callback(null, profile)
	}
));

const Schema = mongoose.Schema;

// Create schema for storing tweets
const timelineSchema = new Schema({
	author: String,
	content: String,
	id: Number,
})

app.listen(app.get('port'), () => {
	console.log('Express server listening on port ' + app.get('port'));
});