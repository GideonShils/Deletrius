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
    res.redirect('http://127.0.0.1:3000/')
});

router.get('/failure', (req, res) => {
	res.redirect('http://127.0.0.1:3000/');
});

// Get user info
router.get('/user', (req, res) => {
    if (req.user) {
        return res.json({ username: req.user.username })
    } else {
        return res.json( { username: null })
    }
});

// Logout
router.get('/logout', (req, res) => {
    if (req.user) {
        req.session.destroy()
        return res.json( { msg: 'logging out'} );
    } else {
        return res.json( { msg: 'no user to log out'} );
    }
});

module.exports = router;