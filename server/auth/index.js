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
    console.log(req.session)
    res.redirect('../')
});

router.get('/failure', (req, res) => {
	res.redirect('../');
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
        req.session.destroy()
        return res.json( { msg: 'logging out'} );
    } else {
        return res.json( { msg: 'no user to log out'} );
    }
});

module.exports = router;