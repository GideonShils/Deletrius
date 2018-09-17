import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// User schema
const userSchema = new Schema({
	userId: String,
	userToken: String,
	userTokenSecret: String,
	username: String,
	displayName: String,
	photo: String,
	twit: Object,
	tweets: Object
});

const User = mongoose.model('Users', userSchema);

module.exports = User;

