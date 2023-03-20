const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Fight } = require('../models');

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password']},
            order: [['username', 'ASC']]
        });
    
    const users = userData.map((project) => project.get({ plain: true}));
    console.log(await req.session.loggedIn)
    res.render('home', {
        users,
        loggedIn: req.session.loggedIn, 
     });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    console.log('LOGIN');
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/History', withAuth, async (req, res) => {
    
})



module.exports = router;
