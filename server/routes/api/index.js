const router = require('express').Router();
const authRoutes = require('./auth');
const authRoutesLogin = require('./authlogin');
const authRoutesDates = require('./dates');
const authRoutesLogoff = require('./authlogoff.js');

router.use('/auth', authRoutes);
router.use('/authlogin', authRoutesLogin);
router.use('/dates', authRoutesDates);
router.use('/logoff', authRoutesLogoff);

module.exports = router;
