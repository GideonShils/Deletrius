import mongoose from 'mongoose';

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

const User = mongoose.model('users', userSchema);

module.exports = User;

