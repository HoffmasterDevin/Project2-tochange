const router = require('express').Router();
//const withAuth = require('./utils/auth');
const { User, Fight } = require('../../models');


router.post('/:id/:health', async (req, res) => {
    try {
        const currentUser = req.session.userId
        const dbFightData = await Fight.create({
            user_id: currentUser,
            enemy_id: req.params.id,
            current_health: req.params.health
        });
        const ongoingFight = dbFightData.get({plain: true});
        res.render('currentFight', {ongoingFight, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    };
});