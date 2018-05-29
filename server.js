import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
require('dotenv').config();

// Setup server
const app = express();

app.set('port', process.env.PORT || 3001);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

const router = express.Router();
router.get('/', (req, res) => {
	res.send({message: 'Hello World'});
})

app.use('/api', router);

app.listen(app.get('port'), () => {
	console.log('Express server listening on port ' + app.get('port'));
});


// Twitter stuff
var twit = {
	consumer_key: process.env.TWIT_CONS_KEY ,
	consumer_secret: process.env.TWIT_CONS_SEC,
	access_token: process.env.TWIT_ACC_TOK,
	access_token_secret: process.env.TWIT_ACC_SEC
};