import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Tweet schema
const tweetSchema = new Schema({
	user: Number,
	id_str: String,
	data: Object,
	date: Date
});

const Tweet = mongoose.model('Tweets', tweetSchema);

module.exports = Tweet;

