const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Fight } = require('../models');

// router.get('/', withAuth, (req, res) => {
//     console.log('HOME');
//     res.render('home', {
//         loggedIn: req.session.loggedIn
//     });
// });

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {name: req.session.username},
            attributes: {
                exclude: ['password']
            }
        });
        const currentUser = userData.get({ plain: true});
        res.render('home', { currentUser, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    };
});

router.get('/login', (req, res) => {
    console.log('LOGIN');
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/history', withAuth, async (req, res) => {
    try {
        const historyData = await Fight.findAll({
            where: {user_id: req.session.userId}
        });
        const userHistory = historyData.map((project) => project.get({plain: true}));
        //const userHistory = historyData.get({ plain: true});
        res.render('history', {userHistory, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    };
});



module.exports = router;
