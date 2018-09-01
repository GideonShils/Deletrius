import mongoose from 'mongoose';
require('dotenv').config();

mongoose.connect(process.env.DB_URI, {
	auth: {
		user: process.env.DB_USER,
		password: process.env.DB_PASS
	},
	useNewUrlParser: true
})
.then(() => console.log('Database connection successful'))
.catch((err) => console.error(err + 'Database connection error'));

module.exports = mongoose.connection;