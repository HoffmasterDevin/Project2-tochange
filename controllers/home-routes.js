const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User } = require('../models');

router.get('/', withAuth, async (req, res) => {
    // try {
    //     const user = await User.findOne({

    //     })
    // }
    // console.log('HOME');
    const userName = req.session.username
    res.render('home', {
        loggedIn: req.session.loggedIn,
        userName 
     });
});
router.get('/login', (req, res) => {
    console.log('LOGIN');
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});



module.exports = router;
