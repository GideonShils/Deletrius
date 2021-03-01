import mongoose from 'mongoose';
require('dotenv').config();

// Conect to mongoDB database
mongoose.connect(process.env.DB_URI, {
	user: process.env.DB_USER,
	pass: process.env.DB_PASS,
	dbName: process.env.DB_NAME,
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => console.log('Database connection successful'))
.catch((err) => console.error(err + 'Database connection error'));

module.exports = mongoose.connection;