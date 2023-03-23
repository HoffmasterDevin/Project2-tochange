const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

const fightRoutes = require('./fight-routes');

router.use('/fight', fightRoutes);

module.exports = router;
