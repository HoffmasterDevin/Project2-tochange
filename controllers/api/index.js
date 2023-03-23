const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

const fightRoutes = require('./fight-routes.js');

router.use('/fight', fightRoutes);

module.exports = router;
