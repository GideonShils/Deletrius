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
    console.log('login success')
    console.log(req.user)
    res.redirect('http://127.0.0.1:3000/?s')
});

router.get('/failure', (req, res) => {
    console.log('login failure')
    console.log(req.user)
	res.redirect('http://127.0.0.1:3000/?f');
});

// Get user info
router.get('/user', (req, res) => {
    console.log('user info')
    console.log(req.user)
    if (req.user) {
        return res.json({ user: req.user })
    } else {
        return res.json( { user: null })
    }
});

// Logout
router.post('/logout', (req, res) => {
    console.log('logging out')
    if (req.user) {
        req.session.destroy()
        return res.json( { msg: 'logging out'} );
    } else {
        return res.json( { msg: 'no user to log out'} );
    }
});

module.exports = router;