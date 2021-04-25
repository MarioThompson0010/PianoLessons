const router = require('express').Router();
const authRoutes = require('./auth');
const authRoutesLogin = require('./authlogin');
const authRoutesDates = require('./dates');
const authRoutesLogoff = require('./authlogoff.js');
const authRoutesCheckLogOn = require('./authCheckLogOn.js');

router.use('/auth', authRoutes);
router.use('/authlogin', authRoutesLogin);
router.use('/dates', authRoutesDates);
router.use('/logoff', authRoutesLogoff);
router.use('/checkLogOn', authRoutesCheckLogOn);

module.exports = router;
