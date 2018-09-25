import express from 'express';
import passport from '../passport';

const router = express.Router();

// Login
router.get('/twitter', passport.authenticate('twitter'));

// Login callback
router.get('/twitter/callback', 
    passport.authenticate('twitter', {
        successRedirect: '/auth/success',
        failureRedirect: '/auth/failure'
    })
);

router.get('/success', (req, res) => {
    if (process.env.NODE_ENV == 'dev') {
        res.redirect('http://127.0.0.1:3000/')
    } else {
        res.redirect('http://www.deletrius.com.')
    }
});

router.get('/failure', (req, res) => {
    if (process.env.NODE_ENV == 'dev') {
        res.redirect('http://127.0.0.1:3000/');
    } else {
        res.redirect('http://www.deletrius.com/');
    }
});

// Get user info
router.get('/user', (req, res) => {
    if (req.user) {
        return res.json({ 
            username: req.user.username,
            photo: req.user.photo,
            userId: req.user.userId
        })
    } else {
        return res.json(null)
    }
});

// Logout
router.get('/logout', (req, res) => {
    if (req.user) {
        // Destroy the session
        req.session = null;
        return res.json( { msg: 'logging out'} );
    } else {
        return res.json( { msg: 'no user to log out'} );
    }
});

module.exports = router;