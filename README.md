<p align="center">
    <a href="https://deletriusv1.herokuapp.com" rel="noopener" target="_blank">
        <img width="150" src="./client/src/assets/logo.svg" alt="Deletrius logo">
    </a>
</p>
<h1 align="center">Deletrius</h1>
<p align="center"> Quickly find and delete old tweets in bulk</p>

## Features
* Search your tweets based on keywords or date ranges
* Select and bulk delete tweets
* Delete every tweet that matches a search query

## Tools / Technologies used
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com)
* [React](https://reactjs.org)
* [MongoDB](https://www.mongodb.com)
* [Passport](http://www.passportjs.org) for twitter authentication

## Todo
- [ ] Auto fetch tweets on login
- [ ] Import archive
- [ ] Login failure redirect page

## How to run locally
To run deletrius locally, download the repository, move to the root directory, and run:

`yarn install`

`yarn start:dev` 

To work correctly, this project requires a .env file. A sample file has been provided as sample.env.

In the root directory create a file ".env" with the following variables:

- Database: You can use an mLab database for testing purposes
    - DB_URI
    - DB_USER
    - DB_PASS
- Twitter API: Keys can be generated by creating a twitter app 
    - CONSUMER_KEY
    - CONSUMER_SECRET
    - ACCESS_TOKEN
    - ACCESS_SECRET
- Session key: A secret key (can be anything)
    - SESSION_SECRET
- Callback url: e.g. http://127.0.0.1:3001/auth/twitter/callback
    - CALLBACK_URL
- Node environment: dev or prod
    - NODE_ENV

## Disclaimer
While Deletrius is functional, it is still under development and is not guaranteed to be bug free.

Please use with caution. Once deleted, tweets cannot be recovered.

Deletrius is not responsible for any loss of data resulting from user or system error 

## Credit

Created by [Gideon Shils](gideonshils.com)

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>


